import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

}
