import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='Hobby-Manager';
  persons:Person[]=[{id:0,name:'',age:0}];
  personToEdit:Person={id:0,name:'',age:null};



  constructor(private personservice : PersonService) {
  }
  
  ngOnInit() {
    this.loadPersons();
  }

  loadPersons(){
    return this.personservice.getPersons().subscribe(
      data=> this.persons=data
    );
  }

  editPerson(person:Person){
    return Object.assign(this.personToEdit,person);
  }

  updatePerson(person:Person){
    this.personToEdit={id:0,name:'',age:null}
    return this.personservice.updatePerson(person).subscribe(()=>
      this.loadPersons()
      
    )}
    

  cancelEditMode(event:boolean){
    this.personToEdit={id:0,name:'',age:null};
    this.editPerson(this.personToEdit);
  }
}
