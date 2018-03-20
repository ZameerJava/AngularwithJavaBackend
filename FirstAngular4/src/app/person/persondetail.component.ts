import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from './person';
import { PersonService } from './person.service';
@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {
  person: Person;
  sub: any;
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      this.personService.get(id).subscribe(p => this.person = p);
    });
  }

}
