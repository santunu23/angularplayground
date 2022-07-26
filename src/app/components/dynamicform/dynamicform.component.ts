import { Component, OnInit } from '@angular/core';
import {FormControl, 
  FormGroup,
  FormBuilder,
  FormArray,
  Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
  buyTicketForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buyTicketForm=this.fb.group({
      newvalue:this.fb.array([this.createTicket()],Validators.required)
    })
  }
  addData(){
    this.newvalue.push(this.createTicket());
  }
  buyTickets(){
    if(this.buyTicketForm.status=='VALID'){
      console.log(this.buyTicketForm.value)
    }
  }
  createTicket():FormGroup{
    return this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required]
    })
  }
  get newvalue():FormArray{
    return <FormArray>this.buyTicketForm.get('newvalue');
  }
  deleteValue(i){
    this.newvalue.removeAt(i);
  }
}
