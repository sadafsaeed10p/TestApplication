"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Planet_Service_1 = require("./Planet.Service");
var PlanetComponent = (function () {
    //imgPath:string;
    function PlanetComponent(planetService) {
        this.planetService = planetService;
        this.planets = [];
        this.originalPlanets = [];
    }
    PlanetComponent.prototype.ngOnInit = function () {
        try {
            this.getPlanets();
        }
        catch (error) {
            alert(error);
        }
    };
    PlanetComponent.prototype.getPlanets = function () {
        var _this = this;
        this.planetService
            .getPlanets()
            .then(function (planets) { return _this.planets = _this.originalPlanets = planets; });
    };
    //Events
    PlanetComponent.prototype.onClick = function (planet) {
        planet.id = this.planetService.getPlanetId(planet);
        planet.imgPath = "/images/" + planet.id + ".jpg";
        this.selectedPlanet = planet;
    };
    PlanetComponent.prototype.save = function (planet) {
        this.planetService.savePlanet(planet).then(function (v) { alert(v); });
    };
    PlanetComponent.prototype.search = function () {
        var _this = this;
        this.planets = this.originalPlanets.filter(function (v) { return v.name.toLowerCase().indexOf(_this.searchTerm) > -1; });
    };
    return PlanetComponent;
}());
PlanetComponent = __decorate([
    core_1.Component({
        selector: 'planet',
        templateUrl: './Planet-Form.html',
        styleUrls: ['./CustomStyles/planetForm.css'],
        providers: [Planet_Service_1.PlanetService]
    }),
    __metadata("design:paramtypes", [Planet_Service_1.PlanetService])
], PlanetComponent);
exports.PlanetComponent = PlanetComponent;
//# sourceMappingURL=Planet.Component.js.map