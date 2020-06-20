import { Observable, from } from 'rxjs';
import { Project } from './models/project';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { Todo } from './models/todo';

class Api {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public get projects(): Observable<Project[]> {
    return ajax(this.projectsPath).pipe(map(projectsFromResponse));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return from(this.updateTodoRequest(todo))
      .pipe(map(res => res.json()))
      .pipe(map(todoJson => plainToClass(Todo, todoJson)));
  }

  updateTodoRequest(todo: Todo): Promise<Response> {
    return fetch(this.todoPath(todo), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; utf-8' },
      mode: 'cors',
      body: JSON.stringify({ todo: todo.toJson() })
    });
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
  let projects = plainToClass(Project, <Object[]>res.response);
  projects.forEach(project => {
    project.todos = project.todos.map(todoJson => {
      let todo = plainToClass(Todo, todoJson);
      todo.project = project;
      return todo;
    });
  });
  return projects;
}

export const api = new Api(environment.apiBaseUrl);
