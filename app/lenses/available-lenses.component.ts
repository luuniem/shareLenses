import { Component } from 'angular2/core';
import { ILens } from './lens';

@Component ({
  selector: 'av-lenses',
  templateUrl: 'app/lenses/available-lenses.component.html'
})

export class AvailableLensesComponent {
  pageTitle: string = "Available Lenses";
  lenses: ILens[] = [{
                  "datePosted": "8/29/16",
                  "brand": "Canon",
                  "type" : "Wide Angle",
                  "fLength": "11-24",
                  "description": "This super awesome USM L-series will take the ultimate wide angle pictures in Portland. I'm not using it right now. Price negotiable!",
                  "location": "Downtown Portland",
                  "price": 10,
                  "imageUrl": "http://media.the-digital-picture.com/Images/Review/Canon-EF-11-24mm-f-4L-USM-Lens.jpg"}
                ];
}
