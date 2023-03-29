import { Component, OnDestroy } from '@angular/core';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
import { Observable, retry,interval,take,map,filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs:Subscription



  //si no se limpia la memoria se puede generar un memory leak
    ngOnDestroy(): void {
      this.intervalSubs.unsubscribe()
  }


  constructor() { 

    // this.returnObersevable().pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   valor=>console.log(valor),
    //   error=>console.log(error),
    //   ()=>console.log('terminado')
    // );

    this.intervalSubs= this.returnInterval().subscribe(console.log)
 
  }


  returnObersevable(){
    let i=-1

    return new Observable<number>(observer => {      
      setInterval(() => {
          i++
          observer.next(i)
          if(i===4){
            clearInterval(i)
            observer.complete()
          }
          if(i===2){      
            observer.error('i llego al valor de 2')
          }
      },1000)

    })
  }

  //con este interval nos evitamos de usar el setinterval
 //(exprecion)?valorVerdadero:ValorFalso



  returnInterval():Observable<number>{
    return interval(500)
    .pipe(
      map(valor=>valor),
      filter(valor=>(valor%2===0)?true:false),
      take(10)
    )
    
  }



}
