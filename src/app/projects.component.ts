import { Component, OnInit } from '@angular/core';
import { Project } from './project';

import { ajax } from 'rxjs/ajax';
import { plainToClass } from "class-transformer";

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
  ngOnInit() {
    this.projectsJson();
  }
  projects: Array<Project> = [];

  projectsJson() {
    ajax('https://og-task-list-api.herokuapp.com/projects')
      .subscribe({
        next: (res) => {
          this.projects = <Project[]>plainToClass(Project, res.response);
        },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
      });
  }
}
