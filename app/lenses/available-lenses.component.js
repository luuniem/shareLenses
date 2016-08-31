System.register(['angular2/core', './lens-filter.pipe', '../shared/thumbs.component', './lens.service'], function(exports_1, context_1) {
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
    var core_1, lens_filter_pipe_1, thumbs_component_1, lens_service_1;
    var AvailableLensesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lens_filter_pipe_1_1) {
                lens_filter_pipe_1 = lens_filter_pipe_1_1;
            },
            function (thumbs_component_1_1) {
                thumbs_component_1 = thumbs_component_1_1;
            },
            function (lens_service_1_1) {
                lens_service_1 = lens_service_1_1;
            }],
        execute: function() {
            AvailableLensesComponent = (function () {
                function AvailableLensesComponent(_lensService) {
                    this._lensService = _lensService;
                    this.pageTitle = "Available Lenses:";
                }
                AvailableLensesComponent.prototype.ngOnInit = function () {
                    this.lenses = this._lensService.getLenses();
                };
                AvailableLensesComponent = __decorate([
                    core_1.Component({
                        selector: 'av-lenses',
                        templateUrl: 'app/lenses/available-lenses.component.html',
                        pipes: [lens_filter_pipe_1.LensFilterPipe],
                        directives: [thumbs_component_1.ThumbComponent]
                    }), 
                    __metadata('design:paramtypes', [lens_service_1.LensService])
                ], AvailableLensesComponent);
                return AvailableLensesComponent;
            }());
            exports_1("AvailableLensesComponent", AvailableLensesComponent);
        }
    }
});
//# sourceMappingURL=available-lenses.component.js.map