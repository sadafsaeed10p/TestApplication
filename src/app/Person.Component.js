"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Person_Service_1 = require("./Person.Service");
var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
        this.people = [];
        this.originalPersons = [];
    }
    PersonComponent.prototype.ngOnInit = function () {
        try {
            this.getPersons();
        }
        catch (error) {
            alert(error);
        }
    };
    PersonComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService
            .getPersons()
            .then(function (persons) { return _this.people = _this.originalPersons = persons; });
    };
    //Events
    PersonComponent.prototype.onClick = function (person) {
        person.id = this.personService.getPersonId(person);
        this.selectedPerson = person;
    };
    PersonComponent.prototype.save = function (person) {
        this.personService.savePerson(person).then(function (v) { alert(v); });
    };
    PersonComponent.prototype.search = function () {
        var _this = this;
        this.people = this.originalPersons.filter(function (v) { return v.name.toLowerCase().indexOf(_this.searchTerm) > -1; });
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        selector: 'person',
        templateUrl: './Person-Form.html',
        styleUrls: ['./CustomStyles/personForm.css'],
        providers: [Person_Service_1.PersonService]
    }),
    __metadata("design:paramtypes", [Person_Service_1.PersonService])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=Person.Component.js.map