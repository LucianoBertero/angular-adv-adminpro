import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  label1=[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ]
  data1=[ 350, 450, 100 ]


  // events
  get getlabel1(){
    return this.label1;
  }
}
