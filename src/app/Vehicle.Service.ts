import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Vehicle } from './Vehicle';

@Injectable()
export class VehicleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://swapi.co/api';  // URL to web api

  constructor(private http: Http) { }

  getVehicles(): Promise<Vehicle[]> {
    return this.http.get(`${this.baseUrl}/vehicles`, {headers: this.getHeaders()})
               .toPromise()
               .then(response => response.json().results as Vehicle[])
               .catch(this.handleError);
  }

  getVehicleId(vehicle: Vehicle){
    let extractedId = vehicle.url.replace('http://swapi.co/api/vehicles/','').replace('/','');
    return parseInt(extractedId);
  }
  
  saveVehicle(vehicle: Vehicle) : Promise<Response>{
    return this.http.put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle),
                 {headers: this.getHeaders()}).toPromise()
               .then(response => response.json() as Response)
               .catch(this.handleError);
    // this won't actually work because the StarWars API doesn't 
    // is read-only. But it would look like this:
  //  return this.http.put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle), {headers: this.getHeaders()});
  }

  private handleError(error: any): Promise<any> {
   alert('An error occurred in Vehicle Service' + error);
    return Promise.reject(error.message || error);
  }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
