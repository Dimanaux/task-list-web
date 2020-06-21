import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { api } from '../api';

@Component({
  selector: 'todos-comp',
  template: `
    <mat-selection-list (selectionChange)="this.onSelection($event)">
      <todo-comp *ngFor="let todo of todos" [todo]=todo>
      </todo-comp>
    </mat-selection-list>
  `
})
export class TodosComponent {
  @Input() todos: Todo[];

  onSelection(event: { option: { value: Todo; }; }): void {
    this.toggleCompleted(event.option.value);
  }

  toggleCompleted(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
    api.updateTodo(todo);
  }
}
