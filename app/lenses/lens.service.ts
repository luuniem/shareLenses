import { Injectable } from 'angular2/core';
import { ILens } from './lens';
// import { Http, Response } from 'angular2/http';
// import { Observable } from 'rxjs/Observable';



@Injectable()
export class LensService {
  getLenses(): ILens[] {
    return [ {
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
                      }
                    ];

  }

//Comment section is for firebase, but not yet working.
  // private _lensUrl = 'https://sharelenses.firebaseio.com/';
  //
  // constructor(private _http: Http) { }
  //
  // getLenses(): Observable<ILens[]> {
  //   return this._http.get(this._lensUrl)
  //     .map((response: Response) => <ILens[]>response.json())
  //     .do(lenses => console.log("All: " + JSON.stringify(lenses)))
  //     .catch(this.handleError);
  // }
  //
  // private handleError(error: Response){
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  }
