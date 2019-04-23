import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  currentUser() {
    return this.afAuth.authState;
  }


}
