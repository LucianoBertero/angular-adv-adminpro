import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  public linkTheme= document.querySelector('#theme');
  public links: NodeListOf<Element>;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }






  changeTheme(theme:string){
    console.log(theme);
    //el set atributo tenes que queres cambiar y despues por que lo vas a cambiar
    document.querySelector('#theme').setAttribute('href',`./assets/css/colors/${theme}.css`);
    localStorage.setItem('theme',theme);
    this.checkCurrentTheme();

    this.linkTheme.setAttribute('href',`./assets/css/colors/${theme}.css`);
    this.checkCurrentTheme();

    }


    changeSideBar(theme:string){
      console.log(theme);
      document.querySelector('#theme').setAttribute('href',`./assets/css/colors/${theme}.css`);
    }


    checkCurrentTheme(){
 
      this.links.forEach(element => {
        element.classList.remove('working');
        const btnTheme = element.getAttribute('data-theme');
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme.getAttribute('href');
        if(btnThemeUrl === currentTheme){
          element.classList.add('working');
        }
      });
    }
}
