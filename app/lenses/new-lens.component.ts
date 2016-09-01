import { Component, EventEmitter } from 'angular2/core';
// import { ILens } from './lens';
import { LensService } from './lens.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Lens } from './lens.model';

@Component ({
  selector: 'new-lens',
  outputs: ['onSubmitNewLens'],
  templateUrl: 'app/lenses/new-lens.component.html',
  directives: [ROUTER_DIRECTIVES]
})


export class NewLensComponent {
  public onSubmitNewLens: EventEmitter<Lens>;
  constructor(){
    this.onSubmitNewLens = new EventEmitter();
  }
  createLens(userDate: HTMLInputElement, userBrand: HTMLInputElement, userType: HTMLInputElement, userLength: HTMLInputElement, userDescription: HTMLInputElement, userLocation: HTMLInputElement, userPrice: HTMLInputElement, userRating: HTMLInputElement, userImage: HTMLInputElement)
  {
    var newLens = new Lens(userDate.value, userBrand.value, userType.value, userLength.value, userLocation.value, parseInt(userPrice.value), parseInt(userRating.value), userImage.value, userDescription.value);
    this.onSubmitNewLens.emit(newLens);
    userDate.value="";
    userBrand.value="";
    userType.value="";
    userLength.value="";
    userDescription.value="";
    userLocation.value="";
    userPrice.value="";
    userRating.value="";
    userImage.value="";
  }

}
