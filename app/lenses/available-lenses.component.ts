import { Component, OnInit, EventEmitter } from 'angular2/core';
import { ILens } from './lens';
import { LensFilterPipe } from './lens-filter.pipe';
import { ThumbComponent } from '../shared/thumbs.component';
import { LensService } from './lens.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Lens } from './lens.model';
import { NewLensComponent } from './new-lens.component';

@Component ({
  templateUrl: 'app/lenses/available-lenses.component.html',
  pipes: [LensFilterPipe],
  directives: [ThumbComponent, ROUTER_DIRECTIVES, NewLensComponent]
})

export class AvailableLensesComponent implements OnInit{
  pageTitle: string = "Available Lenses:";
  searchFilter: string;
  lenses: ILens[];
  availableLens: Lens[];
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

    // createLens(datePosted: string, brand: string, type: string, fLength: string, location: string, price: number, rating: number, imageUrl, string, description: string): void {
    //   new Lens()
    // }

    createLens(newLens: Lens): void {
      this.availableLens.push(newLens);
    }
  }
