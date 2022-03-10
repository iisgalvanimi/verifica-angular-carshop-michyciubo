import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  testo_salvato:string="(ancora nulla)"

  constructor() {}

  onClick(htmlInput1:HTMLInputElement,htmlInput2:HTMLInputElement,htmlInput3:HTMLInputElement) {
    console.log(htmlInput1)
    this.testo_salvato=htmlInput1.value
  }

}
