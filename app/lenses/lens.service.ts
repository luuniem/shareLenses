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
                        "rating": 4.5,
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
                        "rating":4.5,
                        "imageUrl": "http://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/ef28-300_35-56isusm_1_xl.jpg"
                      },
                      {
                        "datePosted": "8/15/10",
                        "brand": "Canon",
                        "type" : "Telephoto",
                        "fLength": "24-105",
                        "description": "Takes awesome pictures. You can take anywhere in portland.",
                        "location": "Alder Street",
                        "price": 17,
                        "rating": 4.5,
                        "imageUrl": "http://www.floatingharbourstudios.co.uk/static/images/equipment/equipment_35_Image1_full.jpg"
                      },
                      {
                        "datePosted": "8/5/16",
                        "brand": "Canon",
                        "type" : "Cinema Prime",
                        "fLength": "14",
                        "description": "Great for filming!",
                        "location": "Pine",
                        "price": 40,
                        "rating": 4.5,
                        "imageUrl": "http://www.floatingharbourstudios.co.uk/static/images/equipment/equipment_1313_Image1_thumb.jpg"
                      },
                      {
                        "datePosted": "8/1/16",
                        "brand": "Sigma",
                        "type" : "Telephoto",
                        "fLength": "24-70",
                        "description": "You'll live! Not the best but worth the price",
                        "location": "Vancouver",
                        "price": 15,
                        "rating": 4.5,
                        "imageUrl": "http://www.floatingharbourstudios.co.uk/static/images/equipment/equipment_609_Image1_thumb.jpg"
                      },
                      {
                        "datePosted": "8/15/16",
                        "brand": "Tamron",
                        "type" : "Zoom",
                        "fLength": "70-300",
                        "description": "Tamron's 70-300mm F/4-5.6 telephoto zoom lens features image stabilization - VC (Vibration Compensation) and an ultrasonic auto-focus drive - USD (Ultrasonic Silent Drive). The SP AF70-300mm F4-5.6 Di VC USD Model A005 high-resolution DSLR telephoto zoom lens has been produced first for the Nikon mount, with the development of compatible mounts for Canon and Sony to follow.",
                        "location": "Alder Street",
                        "price": 15,
                        "rating": 4,
                        "imageUrl": "http://www.the-digital-picture.com/Images/Review/Tamron-70-300mm-f-4-5.6-Di-VC-Lens.jpg"
                      },
                      {
                        "datePosted": "8/15/16",
                        "brand": "Rokinon",
                        "type" : "Wide Angle",
                        "fLength": "14",
                        "description": "The ROKINON 14 mm ultra-wide angle f/2.8 IF ED UMC lens is the high quality affordably priced 14 mm lens on the market. It is designed for full frame cameras and is fully compatible with APS-C cameras as well. Its build and construction are superb!",
                        "location": "3rd Street",
                        "price": 10,
                        "rating": 4.5,
                        "imageUrl": "https://static.bhphoto.com/images/images500x500/Rokinon_FE14M_C_14mm_Ultra_Wide_Angle_f_2_8_1393517196000_769532.jpg"
                      },
                      {
                        "datePosted": "8/15/16",
                        "brand": "Sony",
                        "type" : "Wide Angle",
                        "fLength": "16mm",
                        "description": "The SEL16F28 is an exceptionally portable and versatile lens that's perfect for both photos and video. This bright lens offers a big, 24mm wide angle and 83° field of view for outstanding low-light performance, and smooth, quiet AF (Auto Focus) operation.",
                        "location": "Pine St.",
                        "price": 12,
                        "rating": 4.5,
                        "imageUrl": "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/1230/1230546_ra.jpg"
                      },
                      {
                        "datePosted": "8/5/16",
                        "brand": "Nikon",
                        "type" : "Standard",
                        "fLength": "24-70",
                        "description": "Great USM lens that will take mega awesome crispy pictures",
                        "location": "Alder Street",
                        "price": 15,
                        "rating": 4.5,
                        "imageUrl": "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/3188/3188049_sa.jpg"
                      },
                      {
                        "datePosted": "8/7/16",
                        "brand": "Canon",
                        "type" : "Macro",
                        "fLength": "100",
                        "description": "Experience a broader range of your DSLR's capabilities with this mid-telephoto macro lens. Image stabilization helps to ensure that your photos are clear even at very close range. Capture fine details with unprecedented clarity.",
                        "location": "Alder Street",
                        "price": 15,
                        "rating": 4.5,
                        "imageUrl": "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/9553/9553663_sa.jpg"
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
