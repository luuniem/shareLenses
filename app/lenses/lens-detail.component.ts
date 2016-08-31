import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';



@Component ({
  templateUrl: 'app/lenses/lens-detail.component.html'
})

export class LensDetailComponent {
  pageTitle: string = 'Lens Detail';

  constructor(private _routeParams: RouteParams,
    private _router: Router) {
    let id = this._routeParams.get('id');
    this.pageTitle += `: ${id}`;
  }

  onBack(): void{
    this._router.navigate(['Lenses']);
  }
}
