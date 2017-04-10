import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Planet } from './Planet';

@Injectable()
export class PlanetService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://swapi.co/api';  // URL to web api

  constructor(private http: Http) { }

  getPlanets(): Promise<Planet[]> {
    return this.http.get(`${this.baseUrl}/planets`, {headers: this.getHeaders()})
               .toPromise()
               .then(response => response.json().results as Planet[])
               .catch(this.handleError);
  }

  getPlanetId(planet: Planet){
    let extractedId = planet.url.replace('http://swapi.co/api/planets/','').replace('/','');
    return parseInt(extractedId);
  }
  
   savePlanet(planet: Planet) : Promise<Response>{
    return this.http.put(`${this.baseUrl}/planets/${planet.id}`, JSON.stringify(planet),
                 {headers: this.getHeaders()}).toPromise()
               .then(response => response.json() as Response)
               .catch(this.handleError);
    // this won't actually work because the StarWars API doesn't 
    // is read-only. But it would look like this:
  //  return this.http.put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle), {headers: this.getHeaders()});
}
  private handleError(error: any): Promise<any> {
   alert('An error occurred ' + error);
    return Promise.reject(error.message || error);
  }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
