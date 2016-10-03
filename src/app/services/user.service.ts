import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  createAccount() {
    var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
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
  loging() { }
  logout() { }
}
