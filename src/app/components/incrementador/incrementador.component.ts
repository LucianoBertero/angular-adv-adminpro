import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  //valor que entra al componente
  @Input() boxWidth:number = 50;

  @Input() btnClass:string = 'btn-primary';

  //valor de salida del componente
  @Output() valorSalida:EventEmitter<number> = new EventEmitter();  

  nombre: string = '';

//claro cada vez que se renderiza le agrega al frente la clase btn al boton y lo demas es lo que le mandamos nosotros 
  ngOnInit(): void {
   this.btnClass=`btn ${this.btnClass}`;
  }

  get getPorcentaje(){
    return `${this.boxWidth}%`;
  }


  cambiarValor(valor: number){
    if(this.boxWidth >= 100 && valor > 0){     
      this.boxWidth = 100;
      this.valorSalida.emit(this.boxWidth);      
      return;
    }
    if(this.boxWidth <= 0 && valor < 0){
      this.boxWidth = 0;
      this.valorSalida.emit(this.boxWidth);
      return;
    }
    this.boxWidth = this.boxWidth + valor;
    this.valorSalida.emit(this.boxWidth);
  }


  validarValor(event: any) {
    if (event > 100) {
      this.boxWidth = 100;
    } else {
      this.boxWidth = event;
    }
    this.valorSalida.emit(this.boxWidth);
  }



}
