import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Formation} from "../../utils/types/Formation";

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent {

  /************* Template driven Form *****/
  username: string = '';
  user_login = {
    email: '',
    password: ''
  }
  isEmailDirty = false;

  get isEmailValid():boolean {
    return (
      !!this.user_login.email.trim() &&
      this.user_login.email.length > 4 &&
      this.user_login.email.includes('@')
    )
  }

  login() {
    if(this.isEmailValid) {
      console.log('Login !', this.user_login);
    }
  }



  /**************** Reactive forms *******/

  book_control = new FormControl('', [Validators.minLength(2), Validators.required]);
  today = new Date();

  saveBook() {
    console.log(this.book_control.value);
  }

  /**** Formation ***/
  all_categories = ['Web', 'Graphisme', 'Cuisine', 'Tricot'];

  formation_form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    start: new FormControl(),
    duration: new FormControl(1, [Validators.required, Validators.min(1)]),
    trainer: new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl()
    }),
    categories: new FormArray([])
  });

  saveFormation() {
    if(this.formation_form.valid) {
      const new_formation: Formation = this.formation_form.value as Formation;
      console.log(new_formation);
    }
  }


  getError(control: 'title' | 'start' | 'duration') {
     const input = this.formation_form.controls[control] as FormControl;
     if(input.touched && input.invalid) {
       if(input.hasError('required')) {
         return `Le champs ${control} est obligatoire`;
       }
       if(input.hasError('minlength')) {
         return `Le champs ${control} est trop court`;
       }
       if(input.hasError('maxlength')) {
         return 'Ce champs est trop long';
       }
       return 'Ce champs est invalide';
     }
     return '';
  }

}
