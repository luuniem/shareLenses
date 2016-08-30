System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AvailableLensesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AvailableLensesComponent = (function () {
                function AvailableLensesComponent() {
                    this.pageTitle = "Available Lenses";
                    this.lenses = [
                        {
                            "datePosted": "8/29/16",
                            "brand": "Canon",
                            "type": "Wide Angle",
                            "fLength": "11-24",
                            "description": "This super awesome USM L-series will take the ultimate wide angle pictures in Portland. I'm not using it right now. Price negotiable!",
                            "location": "Downtown Portland",
                            "price": 18,
                            "imageUrl": "http://media.the-digital-picture.com/Images/Review/Canon-EF-11-24mm-f-4L-USM-Lens.jpg"
                        },
                        {
                            "datePosted": "8/15/16",
                            "brand": "Canon",
                            "type": "Telephoto",
                            "fLength": "11-24",
                            "description": "Great USM lens that will take mega awesome crispy pictures",
                            "location": "Alder Street",
                            "price": 15,
                            "imageUrl": "http://www.kenrockwell.com/canon/lenses/images/24-70mm-ii/D3S_8896-1200.jpg"
                        },
                        {
                            "datePosted": "8/29/16",
                            "brand": "Canon",
                            "type": "Zoom",
                            "fLength": "28-300",
                            "description": "This zoom lens will let you awsome bird pictures",
                            "location": "Downtown Portland",
                            "price": 25,
                            "imageUrl": "http://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/ef28-300_35-56isusm_1_xl.jpg"
                        },
                    ];
                }
                AvailableLensesComponent = __decorate([
                    core_1.Component({
                        selector: 'av-lenses',
                        templateUrl: 'app/lenses/available-lenses.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AvailableLensesComponent);
                return AvailableLensesComponent;
            }());
            exports_1("AvailableLensesComponent", AvailableLensesComponent);
        }
    }
});
//# sourceMappingURL=available-lenses.component.js.map