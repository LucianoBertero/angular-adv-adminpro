import { Component, OnInit } from '@angular/core';
declare function cumtomInitFuntions():void;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    document.querySelector('#theme').setAttribute('href',`assets/css/colors/${theme}.css`);

    cumtomInitFuntions()
  }

}



