import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {
  /*1)Crear una variable: miPortfolio:any; */
  miPortfolio:any;
  educacionList:any;

  constructor(private datoPorfolio:PortfolioService) { }

  nombres:any;

  ngOnInit(): void {

    /* Este codigo se conecta al metodo get de una base de datos local, simulada en un JSON */
    //this.datoPorfolio.obtenerDatos().subscribe(data =>{
    //  console.log(data)
    //  /*2)Asignar a la variable los valores obtenidos desde el json: this.miPortfolio=data;*/
    //  this.miPortfolio=data;
    //  this.educacionList=data.formacion_desarrollador;
   // })

        /*METODO GET*/
    this.datoPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.nombres = data;
    })
  }
      /*METODO POST*/
  agregar(nombre:string, apellido:string){
      this.datoPorfolio.agregarNombre({nombre, apellido}).subscribe(data=>{
        console.log(nombre)
        this.ngOnInit()
      })
  }
      /*METODO DELETE*/
  eliminar(nombre_id:any){
    console.log(nombre_id)
    this.datoPorfolio.eliminarNombre(nombre_id).subscribe((resultado:any) =>{
      
      this.ngOnInit()
    } )
  }

}
