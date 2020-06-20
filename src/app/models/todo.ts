import { Project } from './project';

export class Todo {
  id: Number;
  text: string;
  isCompleted: boolean;
  project: Project;

  constructor(id: Number, text: string, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }

  toJson(): Object {
    return {
      text: this.text,
      isCompleted: this.isCompleted
    };
  }
}
