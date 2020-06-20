import { Todo } from './todo';

export class Project {
  id: Number;
  title: string;
  todos: Array<Todo>;

  constructor(id: Number, title: string, todos = []) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }
}
