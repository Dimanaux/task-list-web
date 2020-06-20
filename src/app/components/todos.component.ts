import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todos-comp',
  template: `
    <mat-selection-list>
      <todo-comp *ngFor="let todo of todos" [todo]=todo></todo-comp>
    </mat-selection-list>
  `,
  styles: [
  ]
})
export class TodosComponent {
  @Input()
  public todos: Array<Todo>;
}
