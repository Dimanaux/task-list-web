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
  `,
  styles: [
  ]
})
export class TodosComponent {
  @Input() todos: Array<Todo>;

  onSelection(event: { option: { value: Todo; }; }) {
    this.toggleCompleted(event.option.value);
  }

  toggleCompleted(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    api.updateTodo(todo).subscribe({
      next: (todo) => {
        console.log("Updated", todo);
      }
    });
  }
}
