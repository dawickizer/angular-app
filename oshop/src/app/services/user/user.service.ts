import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  // will create new user if user does not exist, or will destroy and recreate current user with new fields
  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).set({
      name: user.displayName,
      email: user.email,
      isAdmin: true
    });
  }

  // delete a user
  delete(user: firebase.User) {
    this.db.object('/users/' + user.uid).remove();
  }

  // get a user
  get(user: firebase.User): Observable<User> {

    return this.db.object('/users/' + user.uid).valueChanges().pipe(map(user => user as User));
  }

  // get all users
  getAll(): Observable<User[]> {
    return this.db.list('/users/').valueChanges().pipe(map(users => users as User[]));
  }


}
