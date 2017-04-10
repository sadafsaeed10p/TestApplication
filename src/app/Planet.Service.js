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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var PlanetService = (function () {
    function PlanetService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = 'http://swapi.co/api'; // URL to web api
    }
    PlanetService.prototype.getPlanets = function () {
        return this.http.get(this.baseUrl + "/planets", { headers: this.getHeaders() })
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    PlanetService.prototype.getPlanetId = function (planet) {
        var extractedId = planet.url.replace('http://swapi.co/api/planets/', '').replace('/', '');
        return parseInt(extractedId);
    };
    PlanetService.prototype.savePlanet = function (planet) {
        return this.http.put(this.baseUrl + "/planets/" + planet.id, JSON.stringify(planet), { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        // this won't actually work because the StarWars API doesn't 
        // is read-only. But it would look like this:
        //  return this.http.put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle), {headers: this.getHeaders()});
    };
    PlanetService.prototype.handleError = function (error) {
        alert('An error occurred ' + error);
        return Promise.reject(error.message || error);
    };
    PlanetService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return PlanetService;
}());
PlanetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PlanetService);
exports.PlanetService = PlanetService;
//# sourceMappingURL=Planet.Service.js.map