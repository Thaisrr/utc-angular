import { Component } from '@angular/core';
import {Form} from "@angular/forms";
import {Formation} from "../../utils/types/Formation";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  message = 'Hello World';
  my_image = 'https://external-preview.redd.it/Q5t8W9CmystxGaffI_oHpkXD99SfirB3HQvRcDFJoWQ.jpg?auto=webp&s=196c256ca36214203beeb3a7d07f159bbe34da7b'
  image_desc = 'Un super chat galactique à lunettes';
  coffee = {
    url: '../../../assets/images/3D-coffee-cup.png',
    description: 'Tasse à café'
  }
  formation: Formation = {
    title: 'Ceci est un test',
    start: '2022-12-12',
    trainer: {
      firstname: 'toto',
      lastname: 'dupond'
    },
    duration: 12,
    categories: ['Web'],
    id: 123
  }

  displayText() {
    return 'Some text from a function'
  }
  displayVoid() {}
}
