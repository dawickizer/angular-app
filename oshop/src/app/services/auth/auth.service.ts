import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../models/user/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router, private userService: UserService) { }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  loggedIn(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  currentUser(): Observable<User> {
    return this.loggedIn().pipe(switchMap(user => this.userService.get(user.uid)));
  }

}
