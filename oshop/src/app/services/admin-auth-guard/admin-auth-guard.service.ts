import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// models
import { User } from '../../models/user/user.model';

// services
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.currentUser()
    .pipe(
      switchMap(user => this.userService.get(user)),
      map(user => user.isAdmin)
    )
  }
}
