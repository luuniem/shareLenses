import { Component } from 'angular2/core';
import { AvailableLensesComponent } from './lenses/available-lenses.component';
import { LensService } from './lenses/lens.service';
// import { HTTP_PROVIDERS} from 'angular2/http';
// import 'rxjs/Rx'; //load features -links to HTTP_PROVIDERS. Prep for HTTP requests
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { WelcomeComponent } from './home/welcome.component';
import {LensDetailComponent } from './lenses/lens-detail.component';
import { NewLensComponent} from './lenses/new-lens.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  // providers: [LensService, HTTP_PROVIDERS], //HTTP_PROVIDERS is for firebase, which is not working yet
  providers: [LensService, ROUTER_PROVIDERS],
  template:
  `
  <div class="container">
    <nav>
      <div class="nav-wrapper">
        <a class="brand-logo right">{{pageTitle}}</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a [routerLink]="['Welcome']">Home</a></li>
          <li><a [routerLink]="['Lenses']">Available Lenses</a></li>
          <li><a [routerLink]="['NewLens']">Post Lens</a></li>
        </ul>
      </div>
      </nav>
        <router-outlet></router-outlet>
    </div>
  `
})

@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
  { path: '/available-lenses', name: 'Lenses', component: AvailableLensesComponent },
  { path: '/lens/:id', name: 'LensDetail', component: LensDetailComponent },
  { path: '/post-lens', name: 'NewLens', component: NewLensComponent}
])

export class AppComponent {
  pageTitle: string = 'Share Lenses';
}
