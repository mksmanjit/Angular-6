import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logOut() {
    this.authService.changedValue(false);
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
