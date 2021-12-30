import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public chatWindowUserState: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  abrir_chat(): void {

  }

}
