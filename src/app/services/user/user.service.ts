import { Injectable } from '@angular/core';

declare var Firebase: any;

@Injectable()
export class UserService {

  constructor() { }
  createAccount() {
    var ref = new Firebase("https://edesia-fe63e.firebaseio.com");
    ref.createUser({
      email: "bobtony@firebase.com",
      password: "correcthorsebatterystaple"
    }, function (error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
  login() { }
  logout() { }
}
