import { Component, OnInit } from '@angular/core';
import { ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})


export class PromesasComponent implements OnInit {


  ngOnInit(): void {
    //create promise
    // const promesa = new Promise((resolve, reject) => {

    //   if(true){
    //     resolve('hola mundo')
    //   }else{
    //     reject('Algo salio mal')
    //   }
     
   
      
    // } );
  


    // promesa.then((mensaje ) => {
    //   console.log(mensaje);
      
    // }).catch(error => console.log('Error en mi promesa', error))


    // console.log('fin init');
    this.getUsuarios().then((usuario) => {
    
      
      
    }).catch((err) => {
      
    });
    
  }


  getUsuarios(){

    const promesa=new Promise(resolve=>{

    
      fetch('https://reqres.in/api/users')
      .then(resp =>resp.json())
      .then(body=>resolve(body.data));
      })
      return promesa;

    }



  }
 

