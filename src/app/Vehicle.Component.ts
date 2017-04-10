import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';
import {  VehicleService } from './Vehicle.Service';
import { Router } from "@angular/router";

@Component({
  selector: 'vehicle',
  templateUrl: './Vehicle-Form.html',
  styleUrls:['./CustomStyles/vehicleForm.css'],
  providers:[VehicleService]
})

export class VehicleComponent implements OnInit {

vehicles: Vehicle[] = [];
originalVehicles: Vehicle[] = [];
selectedVehicle: Vehicle;
searchTerm:string;

constructor(private vehicleService: VehicleService) { }

ngOnInit(): void {
    try{
         this.getVehicles();
    }
    catch(error){
      alert(error);
    }
  }

getVehicles(): void {
    this.vehicleService
        .getVehicles()
        .then(vehicles => this.vehicles = this.originalVehicles = vehicles);
  }

  //Events
  onClick(vehicle: Vehicle)
  {
    vehicle.id = this.vehicleService.getVehicleId(vehicle);
    this.selectedVehicle = vehicle;
  }

  save(vehicle: Vehicle){
    this.vehicleService.saveVehicle(vehicle).then(v => {alert(v);})
    //alert("Modified name: " + vehicle.name);
  }

  search(): void {
   this.vehicles = this.originalVehicles .filter(v => v.name.toLowerCase().indexOf(this.searchTerm) > -1);
}
}