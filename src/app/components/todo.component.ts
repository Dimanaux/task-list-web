import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'todo-comp',
  template: `
    <mat-list-option [selected]=todo.isCompleted>
      {{todo.text}}
    </mat-list-option>
  `,
  styles: [
  ]
})
export class TodoComponent {
  @Input()
  public todo: Todo;
}
