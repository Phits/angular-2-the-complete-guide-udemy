import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    input.ng-invalid {
        border: 2px solid red;
    } 
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'John',
    email: 'john@fitz.com',
    password: 'password',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

    onSubmit(form: NgForm) {
    	console.log(form.value);
    }

}
