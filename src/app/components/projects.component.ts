import { Component, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'projects-comp',
  template: `
    <div class="grid-container">
      <div class="grid-cell" *ngFor="let project of projects">
        <project-comp [project]=project></project-comp>
      </div>
    </div>
  `,
  styles: [
    `
    .grid-container {
      margin: 1em;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40ch, 2fr));
      grid-gap: 1rem;
    }
    `
  ]
})
export class ProjectsComponent {
  @Input()
  public projects: Project[];
}
