import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  doNotShow:Boolean;

  constructor() { }

  ngOnInit(): void {
    const excludedRoutes = ['/login', '/registro', '/recuperacion'];
    if (excludedRoutes.includes(window.location.pathname)) {
      this.doNotShow = true;
    }
  }

}
