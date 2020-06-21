import { Project } from './project';

export class Todo {
  constructor(
    public id: number,
    public text: string,
    public isCompleted = false,
    public project: Project = null
  ) { }

  toJson(): Record<string, unknown> {
    return {
      text: this.text,
      isCompleted: this.isCompleted
    };
  }
}
