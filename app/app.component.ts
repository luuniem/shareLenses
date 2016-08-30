import { Component } from 'angular2/core';
import { AvailableLensesComponent } from './lenses/available-lenses.component';


@Component({
  selector: 'my-app',
  directives: [AvailableLensesComponent],
  template:
  `
    <div class="container">
    <header>
      <h1>{{pageTitle}}</h1>
      </header>
      <av-lenses></av-lenses>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Share Lenses'
}
