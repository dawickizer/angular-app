import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User>;


  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.currentUser();
  }

  logout() {
    this.auth.logout();
  }

}
