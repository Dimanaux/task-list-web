import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../models/todo';
import { Project } from '../models/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'todo-creation-dialog',
  template: `
    <form [formGroup]="todoForm">
      <h1 mat-dialog-title>New Todo</h1>
      <div mat-dialog-content>
        <mat-form-field>
          <mat-label>Text</mat-label>
          <input matInput formControlName="text">
        </mat-form-field>
        <br>
        <mat-form-field>
          <mat-label>Project</mat-label>
          <mat-select formControlName="project">
            <mat-option *ngFor="let project of data.projects" [value]="project">
              {{project.title}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-button (click)="onSubmit()" cdkFocusInitial>Create</button>
      </div>
    </form>
  `,
  styles: [
    `
      input.ng-touched.ng-invalid{
        border-color: red;
      }
    `
  ]
})
export class TodoCreationDialog implements OnInit {
  todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TodoCreationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { projects: Project[]; }
  ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      text: ['', [Validators.required]],
      project: ['', [Validators.required]]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const controls = this.todoForm.controls;

    if (this.todoForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.dialogRef.close(new Todo(
      null, this.todoForm.value.text,
      false, this.todoForm.value.project
    ));
  }
}
