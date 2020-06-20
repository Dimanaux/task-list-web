import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { api } from '../api';

@Component({
  selector: 'todo-comp',
  template: `
    <mat-list-option [selected]=todo.isCompleted checkboxPosition='before' [value]=todo>
      {{todo.text}}
    </mat-list-option>
  `,
  styles: [
  ]
})
export class TodoComponent {
  @Input()
  todo: Todo;
}
