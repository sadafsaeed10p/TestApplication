"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require("./app.component");
var AuthenticationService_1 = require("./AuthenticationService");
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var Person_Component_1 = require("./Person.Component");
var Planet_Component_1 = require("./Planet.Component");
var Vehicle_Component_1 = require("./Vehicle.Component");
exports.router = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "person", component: Person_Component_1.PersonComponent },
    { path: "planet", component: Planet_Component_1.PlanetComponent },
    { path: "vehicle", component: Vehicle_Component_1.VehicleComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(exports.router)],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, Person_Component_1.PersonComponent, Planet_Component_1.PlanetComponent, Vehicle_Component_1.VehicleComponent],
        providers: [AuthenticationService_1.UserAuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map