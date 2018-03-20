import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  private baseUrl = 'http://localhost:80/SWBackend/jaxrs/rest/v1.1/';

  constructor(private http: Http) {
  }

get(id: number): Observable<Person> {
    const person$ = this.http
      .get(`${this.baseUrl}/Person/${id}`, {headers: this.getHeaders()})
      .map(mapPerson);
      return person$;
  }

  getAll(): Observable<Person[]> {
     const person$ = this.http
      .get(`${this.baseUrl}/Person`, {headers: this.getHeaders()})
      .map(mapPersons);
    return person$;
  }
   private getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
function mapPersons(response: Response): Person[] {
  return response.json().map(toPerson);
}
function mapPerson(response: Response): Person {
  return toPerson(response.json());
}
function toPerson(r: any): Person {
  return r;
}
