import { Component, OnInit } from '@angular/core';
import { Planet } from './Planet';
import {  PlanetService } from './Planet.Service';
import { Router } from "@angular/router";

@Component({
  selector: 'planet',
  templateUrl: './Planet-Form.html',
  styleUrls:['./CustomStyles/planetForm.css'],
  providers:[PlanetService]
})

export class PlanetComponent implements OnInit {

planets: Planet[] = [];
originalPlanets: Planet[] = [];
selectedPlanet: Planet;
searchTerm:string;
//imgPath:string;

constructor(private planetService: PlanetService) { }

ngOnInit(): void {
    try{
         this.getPlanets();
    }
    catch(error){
      alert(error);
    }
  }

getPlanets(): void {
    this.planetService
        .getPlanets()
        .then(planets => this.planets = this.originalPlanets = planets);
  }

  //Events
  onClick(planet: Planet)
  {
    planet.id = this.planetService.getPlanetId(planet);
    planet.imgPath = `/images/${planet.id}.jpg`;
    this.selectedPlanet = planet;
    
  }

  save(planet: Planet){
    this.planetService.savePlanet(planet).then(v => {alert(v);})
  }

  search(): void {
   this.planets = this.originalPlanets.filter(v => v.name.toLowerCase().indexOf(this.searchTerm) > -1);
}
}