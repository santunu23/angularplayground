import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-offlineapp',
  templateUrl: './offlineapp.component.html',
  styleUrls: ['./offlineapp.component.css']
})

export class OfflineappComponent implements OnInit {
  show:any;
  fname:string="";
  lname:string="";
  user$:any[]=[];

  constructor(private service:FirebaseService) { }
  
  ngOnInit(): void {
    this.service.getdata().subscribe(data=>{
      this.user$=data.map((e:any)=>{
        return {
          id:e.payload.doc['id'],
          fname: e.payload.doc.data()['fname'],
          lname: e.payload.doc.data()['lname'],
          createdate: e.payload.doc.data()['createdate'],
          createtime: e.payload.doc.data()['createtime']
        }
      });
    });

   }
  
  async  onSubmit(form:NgForm){
    let res={
      fname:form.value.fname,
      lname:form.value.lname,
    }
    this.service.adddata(res).then(e=>{
      if(e){
          this.show=true;
      }
      form.reset();
    })
  }
}
