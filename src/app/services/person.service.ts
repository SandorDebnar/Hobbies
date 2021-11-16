import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'

  })
};

@Injectable({
  providedIn: 'root'
})

  
export class PersonService {

  url = 'http://localhost:3000/persons';

  constructor(private http: HttpClient) {

  }

  getPersons() {
    return this.http.get<Person[]>(this.url);
  }

  updatePerson(person: Person) {
    return this.http.put<Person>(this.url + "/" + person.id, person,httpOptions);
  }
}
