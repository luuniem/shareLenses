import { Component } from 'angular2/core';
import { ILens } from './lens';
import { LensFilterPipe } from './lens-filter.pipe';
import { ThumbComponent } from '../shared/thumbs.component';

@Component ({
  selector: 'av-lenses',
  templateUrl: 'app/lenses/available-lenses.component.html',
  pipes: [LensFilterPipe],
  directives: [ThumbComponent]
})

export class AvailableLensesComponent {
  pageTitle: string = "Available Lenses";
  searchFilter: string =' ';
  lenses: ILens[] = [
                    {
                      "datePosted": "8/29/16",
                      "brand": "panasonic",
                      "type" : "Wide Angle",
                      "fLength": "11-24",
                      "description": "This super awesome USM L-series will take the ultimate wide angle pictures in Portland. I'm not using it right now. Price negotiable!",
                      "location": "Downtown Portland",
                      "price": 18,
                      "rating": 5,
                      "imageUrl": "http://media.the-digital-picture.com/Images/Review/Canon-EF-11-24mm-f-4L-USM-Lens.jpg"
                    },
                    {
                      "datePosted": "8/15/16",
                      "brand": "Nikon",
                      "type" : "Telephoto",
                      "fLength": "24-70",
                      "description": "Great USM lens that will take mega awesome crispy pictures",
                      "location": "Alder Street",
                      "price": 15,
                      "rating": 3,
                      "imageUrl": "http://www.kenrockwell.com/canon/lenses/images/24-70mm-ii/D3S_8896-1200.jpg"
                    },
                    {
                      "datePosted": "8/29/16",
                      "brand": "Canon",
                      "type" : "Zoom",
                      "fLength": "28-300",
                      "description": "This zoom lens will let you awsome bird pictures",
                      "location": "Downtown Portland",
                      "price": 25,
                      "rating":2,
                      "imageUrl": "http://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/ef28-300_35-56isusm_1_xl.jpg"
                    },
                    ];
}
