import { Component } from '@angular/core';

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

  displayText() {
    return 'Some text from a function'
  }
  displayVoid() {}

}
