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
var Vehicle_Service_1 = require("./Vehicle.Service");
var VehicleComponent = (function () {
    function VehicleComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicles = [];
        this.originalVehicles = [];
    }
    VehicleComponent.prototype.ngOnInit = function () {
        try {
            this.getVehicles();
        }
        catch (error) {
            alert(error);
        }
    };
    VehicleComponent.prototype.getVehicles = function () {
        var _this = this;
        this.vehicleService
            .getVehicles()
            .then(function (vehicles) { return _this.vehicles = _this.originalVehicles = vehicles; });
    };
    //Events
    VehicleComponent.prototype.onClick = function (vehicle) {
        vehicle.id = this.vehicleService.getVehicleId(vehicle);
        this.selectedVehicle = vehicle;
    };
    VehicleComponent.prototype.save = function (vehicle) {
        this.vehicleService.saveVehicle(vehicle).then(function (v) { alert(v); });
        //alert("Modified name: " + vehicle.name);
    };
    VehicleComponent.prototype.search = function () {
        var _this = this;
        this.vehicles = this.originalVehicles.filter(function (v) { return v.name.toLowerCase().indexOf(_this.searchTerm) > -1; });
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    core_1.Component({
        selector: 'vehicle',
        templateUrl: './Vehicle-Form.html',
        styleUrls: ['./CustomStyles/vehicleForm.css'],
        providers: [Vehicle_Service_1.VehicleService]
    }),
    __metadata("design:paramtypes", [Vehicle_Service_1.VehicleService])
], VehicleComponent);
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=Vehicle.Component.js.map