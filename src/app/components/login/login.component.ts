import { Component, OnInit, Input } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'ed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model = {
    email: '',
    password: ''
  };
  private _submitted = false;
  constructor(private af: AngularFire) { }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  ngOnInit() {
  }

  login(username: string, password: string) {
     this._submitted = true;
     this.model.email = username;
     this.model.password = password;
     console.log(this.diagnostic);
     this.af.auth.login(this.model);
  }

}
