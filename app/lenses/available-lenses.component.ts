import { Component, OnInit } from 'angular2/core';
import { ILens } from './lens';
import { LensFilterPipe } from './lens-filter.pipe';
import { ThumbComponent } from '../shared/thumbs.component';
import { LensService } from './lens.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component ({
  templateUrl: 'app/lenses/available-lenses.component.html',
  pipes: [LensFilterPipe],
  directives: [ThumbComponent, ROUTER_DIRECTIVES]
})

export class AvailableLensesComponent implements OnInit{
  pageTitle: string = "Available Lenses:";
  searchFilter: string;
  lenses: ILens[];
  errorMessage: string;
    constructor(private _lensService: LensService){

    }

//This is for use with firebase, which is not functioning yet
    // ngOnInit(): void {
    //   this._lensService.getLenses()
    //       .subscribe(lenses => this.lenses = lenses,
    //       error => this.errorMessage = <any>error);
    // }

    ngOnInit(): void {
      this.lenses = this._lensService.getLenses();
    }
  }
