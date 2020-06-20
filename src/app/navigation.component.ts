import { Component, Input, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoCreationDialog } from './components/todoCreation.dialog';
import { Project } from './models/project';
import { api } from './api';

@Component({
  selector: 'navigation-comp',
  template: `
    <mat-toolbar color="primary">
      <span class="fill-space"></span>
      <span>{{title}}</span>
      <span class="fill-space"></span>
      <mat-icon aria-hidden="false" (click)="openDialog()">add</mat-icon>
    </mat-toolbar>
  `,
  styles: [
    `
    .fill-space {
      flex: 1 1 auto;
    }
    `
  ]
})
export class NavigationComponent {
  title = 'task-list-web';

  @Input()
  projects: Project[];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open( TodoCreationDialog, {
      data: { projects: this.projects }
    });

    dialogRef.afterClosed().subscribe(todo => {
      if (todo) {
        api.createTodo(todo);
      }
    });
  }
}
