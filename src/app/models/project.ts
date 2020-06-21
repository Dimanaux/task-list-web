import { Todo } from './todo';

export class Project {
  constructor(
    public id: number,
    public title: string,
    public todos: Todo[] = []
  ) { }
}
