import {Component, Injectable} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class UserAuthService{
    userName:string;
    password:string;

    constructor(private router:Router, private location: Location){}

    IsUserAuthenticated(userName:string, password:string):boolean{
        return (userName == "admin" && password == "admin") ? true : false;
    }
}