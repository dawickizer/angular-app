import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Observable } from 'rxjs';

import { User } from './models/user/user.model'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';
  user: User = new User();

  constructor(private userService: UserService, private auth: AuthService) {

    auth.loggedIn().subscribe(user => {
      if (user) {
        userService.create(user);
        //userService.delete(user.uid);
        userService.get(user.uid).subscribe(user => {
          this.user = user
        });
      }
    });
  }
}
