import { Component, OnInit } from 'angular2/core';
import { ILens } from './lens';
import { LensFilterPipe } from './lens-filter.pipe';
import { ThumbComponent } from '../shared/thumbs.component';
import { LensService } from './lens.service'

@Component ({
  selector: 'av-lenses',
  templateUrl: 'app/lenses/available-lenses.component.html',
  pipes: [LensFilterPipe],
  directives: [ThumbComponent]
})

export class AvailableLensesComponent implements OnInit{
  pageTitle: string = "Available Lenses:";
  searchFilter: string;
  lenses: ILens[];
    constructor(private _lensService: LensService){

    }

    ngOnInit(): void {
      this.lenses = this._lensService.getLenses();
    }
  }
