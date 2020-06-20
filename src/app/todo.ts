export class Todo {
  id: Number;
  text: string;
  isCompleted: boolean;

  constructor(id: Number, text: string, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}
