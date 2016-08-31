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
    var LensService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import { Http, Response } from 'angular2/http';
            // import { Observable } from 'rxjs/Observable';
            LensService = (function () {
                function LensService() {
                }
                LensService.prototype.getLenses = function () {
                    return [{
                            "datePosted": "8/29/16",
                            "brand": "panasonic",
                            "type": "Wide Angle",
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
                            "type": "Telephoto",
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
                            "type": "Zoom",
                            "fLength": "28-300",
                            "description": "This zoom lens will let you awsome bird pictures",
                            "location": "Downtown Portland",
                            "price": 25,
                            "rating": 2,
                            "imageUrl": "http://shop.usa.canon.com/wcsstore/ExtendedSitesCatalogAssetStore/ef28-300_35-56isusm_1_xl.jpg"
                        }
                    ];
                };
                LensService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LensService);
                return LensService;
            }());
            exports_1("LensService", LensService);
        }
    }
});
//# sourceMappingURL=lens.service.js.map