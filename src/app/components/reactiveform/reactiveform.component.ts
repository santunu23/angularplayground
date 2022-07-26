import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registrationForm:FormGroup;

  constructor(private fb:FormBuilder) { }
  // profileForm=new FormGroup({
  //   firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     address: new FormGroup({
  //               street: new FormControl(''),
  //               city: new FormControl(''),
  //               state: new FormControl(''),
  //               zip: new FormControl('')
  //     })
  //  })
    // profileForm=this.fb.group({
    //   firstName:[ '',Validators.required ],
    //   lastName: [ '' ],
    //       address: this.fb.group({
    //         street: [ '' ],
    //         city: [ '' ],
    //         state: [ '' ],
    //         zip: [ '' ]
    //       }) 

    //     })
  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      fullName:[null,Validators.required],
      mno:[null,Validators.required,Validators.pattern,Validators.maxLength,Validators.minLength]
    })

  }
  onSubmit(){
    console.warn(this.registrationForm.value);
  }
}
