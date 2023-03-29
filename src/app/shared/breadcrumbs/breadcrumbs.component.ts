import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo=''
  //usado para destruir la subscripcion
  tituloSubs$:Subscription

  constructor( private router:Router,
               private route:ActivatedRoute) {


    
    this.tituloSubs$=this.getArgumentosRuta().subscribe(({titulo})=>{      
      this.titulo=titulo
      document.title=`AdminPro - ${titulo}`
  })
    
   }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }


   getArgumentosRuta(){
   
   return this.router.events
    .pipe(
      filter(event=>event instanceof ActivationEnd),
      filter((event:ActivationEnd)=>event.snapshot.firstChild===null),
      map(event=>event.snapshot.data)
    )
 

   }

}
