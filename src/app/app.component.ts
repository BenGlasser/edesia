import { Component, OnInit } from '@angular/core';

declare var firebase: any;

@Component({
  selector: 'ed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Edesia';

  constructor() {

  }

  login() {
    console.log("login pressed");
  }

}
