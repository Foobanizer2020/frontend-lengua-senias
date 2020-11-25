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
    if (window.location.pathname == '/login' || window.location.pathname  == '/registro') {
      this.doNotShow = true;
    }
  }

}
