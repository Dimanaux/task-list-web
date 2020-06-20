import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { api } from '../api';

@Component({
  selector: 'todo-comp',
  template: `
    <mat-list-option [selected]=todo.isCompleted checkboxPosition='before' [value]=todo>
      <span class="{{todo.isCompleted ? 'strike' : ''}}">{{todo.text}}</span>
    </mat-list-option>
  `,
  styles: [
    `
    .strike {
      text-decoration: line-through;
    }
    `
  ]
})
export class TodoComponent {
  @Input()
  todo: Todo;
}
