import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact = {
    "contactName": "",
    "email": "",
    "address": "",
    "city": "",
    "status": "",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
