import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserAuthService } from './AuthenticationService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./CustomStyles/loginForm.css']
})
export class LoginComponent {
 
    constructor(private router: Router,private authService:UserAuthService) { }
 
    navigate() {
        this.router.navigate(["/home"]);
    }

     AuthenticateUser(userName:string, password:string){
        if(this.authService.IsUserAuthenticated(userName, password))
        {
            this.router.navigate(['/home']);
        }
        else
            alert('Invalid User name or Password provided!');
    }

 
}