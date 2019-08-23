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

  // update a user in the db. Will destroy and recreate user
  update(user: User) {
    // this.db.object('/users/' + user.uid).set({
    //   name: user.displayName,
    //   email: user.email,
    //   isAdmin: true
    // });
  }

  // Create a new user
  create(user: firebase.User) {
    this.db.object('/users/' + user.uid).set({
      id: user.uid,
      name: user.displayName,
      email: user.email,
      isAdmin: true
    });
  }

  // delete a user
  delete(id: string) {
    this.db.object('/users/' + id).remove();
  }

  // get a user
  get(id: string): Observable<User> {
    return this.db.object('/users/' + id).valueChanges().pipe(map(user => user as User));
  }

  // get all users
  getAll(): Observable<User[]> {
    return this.db.list('/users/').valueChanges().pipe(map(users => users as User[]));
  }


}
