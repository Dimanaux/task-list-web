import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../models/todo';
import { Project } from '../models/project';

@Component({
  selector: 'todo-creation-dialog',
  template: `
    <h1 mat-dialog-title>New Todo</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <mat-label>Text</mat-label>
        <input matInput [(ngModel)]="todo.text">
      </mat-form-field>
      <br>
      <mat-form-field>
        <mat-label>Project</mat-label>
        <mat-select [(ngModel)]="todo.project">
          <mat-option *ngFor="let project of projects" [value]="project">
            {{project.title}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button [mat-dialog-close]="todo" cdkFocusInitial>Create</button>
    </div>
  `
})
export class TodoCreationDialog {
  todo = new Todo(null, '');

  get projects(): Project[] {
    return this.data.projects;
  }

  constructor(
    public dialogRef: MatDialogRef<TodoCreationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { projects: Project[]; }
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }
}
