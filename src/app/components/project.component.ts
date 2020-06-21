import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'project-comp',
  template: `
    <mat-card >
      <mat-card-header>
        <mat-card-title>
          {{project.title}}
        </mat-card-title>
      </mat-card-header>
      <hr>
      <mat-card-content>
        <todos-comp [todos]=project.todos></todos-comp>
      </mat-card-content>
    </mat-card>
  `
})
export class ProjectComponent {
  @Input()
  public project: Project;
}
