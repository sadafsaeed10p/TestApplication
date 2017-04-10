import { Component, OnInit } from '@angular/core';
import { Person } from './Person';
import {  PersonService } from './Person.Service';
import { Router } from "@angular/router";

@Component({
  selector: 'person',
  templateUrl: './Person-Form.html',
  styleUrls:['./CustomStyles/personForm.css'],
  providers:[PersonService]
})

export class PersonComponent implements OnInit {

people: Person[] = [];
originalPersons: Person[] = [];
selectedPerson: Person;
searchTerm:string;
 
constructor(private personService: PersonService) { }

ngOnInit(): void {
    try{
         this.getPersons();
    }
    catch(error){
      alert(error);
    }
  }

getPersons(): void {
    this.personService
        .getPersons()
        .then(persons => this.people =this.originalPersons = persons);
  }
  //Events
  onClick(person: Person)
  {
    person.id = this.personService.getPersonId(person);
    this.selectedPerson = person;
  }

  save(person: Person){
    this.personService.savePerson(person).then(v => {alert(v);})
  }

  search(): void {
   this.people = this.originalPersons .filter(v => v.name.toLowerCase().indexOf(this.searchTerm) > -1);
}
}