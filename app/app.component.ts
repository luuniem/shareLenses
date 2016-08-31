import { Component } from 'angular2/core';
import { AvailableLensesComponent } from './lenses/available-lenses.component';
import { LensService } from './lenses/lens.service';
import { HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; //load features -links to HTTP_PROVIDERS. Prep for HTTP requests

@Component({
  selector: 'my-app',
  directives: [AvailableLensesComponent],
  providers: [LensService, HTTP_PROVIDERS],
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
