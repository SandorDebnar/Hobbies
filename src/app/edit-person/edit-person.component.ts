import { Person } from './../models/person.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  @Input() personToEditFromAppComponent: Person={id:0,name:'',age:null};
  @Output() personToChangeFromEdit= new EventEmitter<Person>();
  @Output() cancelEdit = new EventEmitter<boolean>();
   
  
  editedPerson:Person={id:0,name:'',age:null};
  constructor() { }

  ngOnInit(): void {
    
  }

  cancel(){
    this.cancelEdit.emit(false);
  }
  
  savePerson(){
    this.personToChangeFromEdit.emit(this.personToEditFromAppComponent);
  } 


}
