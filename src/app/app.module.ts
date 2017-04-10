import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { UserAuthService } from './AuthenticationService';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { PersonComponent } from './Person.Component';
import { PlanetComponent } from './Planet.Component';
import { VehicleComponent } from './Vehicle.Component';

export const router: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "person", component: PersonComponent },
    { path: "planet", component: PlanetComponent },
    { path: "vehicle", component: VehicleComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(router)],
  declarations: [ AppComponent, LoginComponent, HomeComponent, PersonComponent, PlanetComponent,VehicleComponent ],
  providers:    [ UserAuthService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

