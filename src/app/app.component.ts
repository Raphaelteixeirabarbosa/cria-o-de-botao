import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {

  title = 'Mercurio';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

