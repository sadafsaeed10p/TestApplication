import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Person } from './Person';

@Injectable()
export class PersonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://swapi.co/api';  // URL to web api

  constructor(private http: Http) { }

  getPersons(): Promise<Person[]> {
    return this.http.get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
               .toPromise()
               .then(response => response.json().results as Person[])
               .catch(this.handleError);
  }

   getPersonId(person: Person){
    let extractedId = person.url.replace('http://swapi.co/api/people/','').replace('/','');
    return parseInt(extractedId);
  }

  savePerson(person: Person) : Promise<Response>{
    return this.http.put(`${this.baseUrl}/vehicles/${person.id}`, JSON.stringify(person),
                 {headers: this.getHeaders()}).toPromise()
               .then(response => response.json() as Response)
               .catch(this.handleError);
    // this won't actually work because the StarWars API doesn't 
    // is read-only. But it would look like this:
  //  return this.http.put(`${this.baseUrl}/vehicles/${vehicle.id}`, JSON.stringify(vehicle), {headers: this.getHeaders()});
}

  private handleError(error: any): Promise<any> {
   alert('An error occurred in Person service' + error);
    return Promise.reject(error.message || error);
  }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
