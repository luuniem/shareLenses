System.register(['angular2/core', './lenses/available-lenses.component', './lenses/lens.service', 'angular2/router', './home/welcome.component', './lenses/lens-detail.component', './lenses/new-lens.component'], function(exports_1, context_1) {
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
    var core_1, available_lenses_component_1, lens_service_1, router_1, welcome_component_1, lens_detail_component_1, new_lens_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (available_lenses_component_1_1) {
                available_lenses_component_1 = available_lenses_component_1_1;
            },
            function (lens_service_1_1) {
                lens_service_1 = lens_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (lens_detail_component_1_1) {
                lens_detail_component_1 = lens_detail_component_1_1;
            },
            function (new_lens_component_1_1) {
                new_lens_component_1 = new_lens_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Share Lenses';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        // providers: [LensService, HTTP_PROVIDERS], //HTTP_PROVIDERS is for firebase, which is not working yet
                        providers: [lens_service_1.LensService, router_1.ROUTER_PROVIDERS],
                        template: "\n  <div class=\"container\">\n    <nav>\n      <div class=\"nav-wrapper\">\n        <a class=\"brand-logo right\">{{pageTitle}}</a>\n        <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n          <li><a [routerLink]=\"['Welcome']\">Home</a></li>\n          <li><a [routerLink]=\"['Lenses']\">Available Lenses</a></li>\n          <li><a [routerLink]=\"['NewLens']\">Post Lens</a></li>\n        </ul>\n      </div>\n      </nav>\n        <router-outlet></router-outlet>\n    </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/available-lenses', name: 'Lenses', component: available_lenses_component_1.AvailableLensesComponent },
                        { path: '/lens/:id', name: 'LensDetail', component: lens_detail_component_1.LensDetailComponent },
                        { path: '/post-lens', name: 'NewLens', component: new_lens_component_1.NewLensComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map