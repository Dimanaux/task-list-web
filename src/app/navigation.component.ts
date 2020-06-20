import { Component } from '@angular/core';

@Component({
  selector: 'navigation-comp',
  template: `
    <mat-toolbar color="primary">
      <span class="fill-space"></span>
      <span>{{title}}</span>
      <span class="fill-space"></span>
      <mat-icon aria-hidden="false">add</mat-icon>
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
}
