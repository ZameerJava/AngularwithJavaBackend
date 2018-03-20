import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PersonService } from './person/person.service';
import { PersonlistComponent } from './person/personlist.component';
import { PersondetailComponent } from './person/persondetail.component';

const appRoutes: Routes = [
// map '/persons' to the people list component
  { path: 'people', component: PersonlistComponent },

 // map '/persons/:id' to person details component
  { path: 'person/:id', component: PersondetailComponent },

// map '/' to '/persons' as our default route
  { path: '', redirectTo: '/people', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersondetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
