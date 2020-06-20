import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navigation-comp></navigation-comp>
    <projects-comp></projects-comp>
  `,
  styles: []
})
export class AppComponent {
  title = 'task-list-web';
}
