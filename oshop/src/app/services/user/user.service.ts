import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { User } from '../../models/user/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private auth: AuthService, private db: AngularFireDatabase) { }

  // Will create new user if user does not exist, or will destroy and recreate current user with new fields
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email
    });
  }

  delete(user: firebase.User) {
    this.db.object('/users/' + user.uid).remove();
  }

  get(user: firebase.User): Observable<User> {

    return this.db.object('/users/' + user.uid).valueChanges().pipe(map(user => user as User));
  }

  getAll() {

  }


}
