import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  currentUser() {
    return this.afAuth.authState;
  }


}
