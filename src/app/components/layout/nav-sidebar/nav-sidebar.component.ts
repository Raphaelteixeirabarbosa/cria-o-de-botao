import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.sass']
})
export class NavSidebarComponent implements OnInit {

  public exmenu: number;

  constructor() { }

  ngOnInit(): void {
    this.exmenu = -1;
  }

  expand_menu(id: number): void {
    if (this.exmenu != id)
      this.exmenu = id;
    else
      this.exmenu = -1;
  }

}
