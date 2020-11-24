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
    if (window.location.pathname == '/login' || window.location.pathname  == '/registro') {
      this.doNotShow = true;
    }
  }
}
