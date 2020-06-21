import { Observable, from } from 'rxjs';
import { Project } from './models/project';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, flatMap } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { Todo } from './models/todo';

class Api {
  constructor(public baseUrl: string) { }

  public get projects(): Observable<Project[]> {
    return ajax(this.projectsPath).pipe(map(projectsFromResponse));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return from(this.updateTodoRequest(todo)).pipe(
      flatMap(res => res.json()),
      map(todoJson => plainToClass(Todo, todoJson))
    );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return from(this.createTodoRequest(todo)).pipe(
      flatMap((res: Response) => res.json()),
      map(todoJson => plainToClass(Todo, todoJson))
    );
  }

  updateTodoRequest(todo: Todo): Promise<Response> {
    return todoRequest('PATCH', this.todoPath(todo), todo);
  }

  createTodoRequest(todo: Todo): Promise<Response> {
    return todoRequest('POST', this.todosPath(todo.project), todo);
  }

  get projectsPath(): string {
    return `${this.baseUrl}/projects`;
  }

  projectPath(project: Project): string {
    return `${this.projectsPath}/${project.id}`;
  }

  todosPath(project: Project): string {
    return `${this.projectPath(project)}/todos`;
  }

  todoPath(todo: Todo): string {
    return `${this.todosPath(todo.project)}/${todo.id}`;
  }
}

function projectsFromResponse(res: AjaxResponse): Project[] {
  const projects = plainToClass(Project, <Record<string, unknown>[]>res.response);
  projects.forEach(project => {
    project.todos = project.todos.map(todoJson => {
      const todo = plainToClass(Todo, todoJson);
      todo.project = project;
      return todo;
    });
  });
  return projects;
}

function todoRequest(method: string, path: string, todo: Todo): Promise<Response> {
  return fetch(path, {
    method: method,
    headers: { 'Content-Type': 'application/json; utf-8' },
    redirect: 'follow',
    mode: 'cors',
    body: JSON.stringify({ todo: todo.toJson() })
  });
}

export const api = new Api(environment.apiBaseUrl);
