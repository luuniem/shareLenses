import { Component } from 'angular2/core';
import { ILens } from './lens';
import { LensService } from './lens.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component ({
  templateUrl: 'app/lenses/new-lens.component.html',
  directives: [ROUTER_DIRECTIVES]
})


export class NewLensComponent {
  pageTitle: string = "Post a New Lens";
  lenses: ILens[];

  constructor(private _lensService: LensService){

  }
}
