import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

import { api } from '../api';

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
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  ngOnInit() {
    api.projects.subscribe({
      next: (projects) => { this.projects = projects; },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }
}
