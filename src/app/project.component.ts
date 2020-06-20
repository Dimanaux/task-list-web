import { Component, Input } from '@angular/core';
import { Project } from './project';

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
  `,
  styles: [
  ]
})
export class ProjectComponent {
  @Input() project: Project;
  // @Input() project: Number;
}
