import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as file from "../../assets/smtp.js";
declare let Email: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      message: new FormControl()
    });
    
  }
  onSubmit(){    
    
    /*Email = file.Email;
     Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'youssifkhairy@gmail.com',
      Password : '3E2B1E141058D6E27BC7E67A83EDF879C6AD',
      To : 'youssifkhairy@gmail.com',
      From : this.form.value.email,
      Subject : 'this.model.subject',
      Body : this.form.value.message
      }).then(message=>{this.form.reset(); console.log(message)}); */
      this.form.reset()
  }

}
