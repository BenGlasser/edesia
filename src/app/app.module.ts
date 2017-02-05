import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { EdesiaNgRoutingModule } from './app-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const myFirebaseConfig = {
  apiKey: "AIzaSyC61cYV6mzQBEJEG2ZEx0N01auTmSrz2sQ",
  authDomain: "glowing-fire-4394.firebaseapp.com",
  databaseURL: "https://glowing-fire-4394.firebaseio.com",
  storageBucket: "glowing-fire-4394.appspot.com",
  messagingSenderId: "547849303612"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EdesiaNgRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
