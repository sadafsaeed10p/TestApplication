import { Component } from '@angular/core';
import { Location } from "@angular/common";
import {Router } from "@angular/router";
 
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./CustomStyles/homeForm.css']
})
export class HomeComponent {
 
    constructor(private location: Location, private router: Router ) { }
 
    goBack() {
        this.location.back();
    }

     navigate(pageName: string) {
        this.router.navigate([pageName]);
    }
}