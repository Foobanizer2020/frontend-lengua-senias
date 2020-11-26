import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  doNotShow:Boolean;

  constructor() { }

  ngOnInit(): void {
    const excludedRoutes = ['/login', '/registro', '/recuperacion'];
    if (excludedRoutes.includes(window.location.pathname)) {
      this.doNotShow = true;
    }
  }
}
