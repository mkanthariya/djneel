import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent{
  contactUsForm = new FormGroup({
    FullName : new FormControl(''),
    Email: new FormControl(''),
    Number: new FormControl(''),
    Message: new FormControl(''),

    });
    onSubmit(){
      console.log(this.contactUsForm.value)
    }
}
