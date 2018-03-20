import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  people: Person[] = [];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAll().subscribe(p => this.people = p);
  }

}
