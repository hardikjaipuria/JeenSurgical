import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
/* import { SnotifyService } from 'ng-snotify'; */
import '../../assets/smtp.js';
declare let Email: any;


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;


  constructor(
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'jaipuriahardik@yahoo.co.in',
      Password: '9F9B39EC30D218CB99EB7722D02DF376C916',
      To: 'hardikjaipuria@gmail.com',
      From: 'jaipuriahardik@yahoo.co.in',
      Subject: 'Message from Jeen Surgical Website',
      Body: `
<i>This is sent as an enquiry from jeensurgical.com. </i> `
    }).then(message => {
      alert(message);
    });

  }
}