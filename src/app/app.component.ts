import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { api } from './api';

@Component({
  selector: 'app-root',
  template: `
    <navigation-comp [projects]=projects></navigation-comp>
    <projects-comp [projects]=projects></projects-comp>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  projects: Project[];

  ngOnInit() {
    api.projects.subscribe({
      next: (projects) => { this.projects = projects; },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }
}
