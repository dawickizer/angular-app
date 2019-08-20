import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Observable } from 'rxjs';

import { User } from './models/user/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private userService: UserService, private auth: AuthService) {
    auth.currentUser().subscribe(user => {
      if (user) {
        userService.save(user);
        //userService.delete(user);
        userService.get(user).subscribe(user => {
          console.log(user);
        });
      }
    });
  }
}
