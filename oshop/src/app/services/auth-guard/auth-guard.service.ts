import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.auth.currentUser()
    .pipe(
      map(user => {
        if (user) return true;
        this.router.navigate(['/login']);
        return false;
      })
    );
  }

}
