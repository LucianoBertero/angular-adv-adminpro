import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso1: number = 20;
  progreso2: number = 30;




  get getprogreso1(){
    return `${this.progreso1}%`;
  }

  get getprogreso2(){
    return `${this.progreso2}%`;
  }





  //lo que hicimos para cambiar la barra de progreso es hacer un get
  //para que se ejecute cada vez que se cambie el valor de la barra
  //y asi poder cambiar el valor de la barra de progreso
  //y tambien se creo un metodo para cambiar el valor de la barra



  // @ViewChild('boxElement') boxElement: ElementRef;





  // sumarProgreso(){
  //   this.boxWidth += 10;
  //   this.boxElement.nativeElement.style.width = this.boxWidth + 'px';
  // }
  // restarProgreso(){
  //   this.boxWidth -= 10;
  //   this.boxElement.nativeElement.style.width = this.boxWidth + 'px';
  // }
}
