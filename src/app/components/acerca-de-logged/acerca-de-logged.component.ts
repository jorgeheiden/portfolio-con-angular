import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-logged',
  templateUrl: './acerca-de-logged.component.html',
  styleUrls: ['./acerca-de-logged.component.scss']
})
export class AcercaDeLoggedComponent implements OnInit {

  miPortfolio:any;
  educacionList:any;

  constructor(private datoPorfolio:PortfolioService) { }

  titulos:any;

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
      this.titulos = data;
    })
  }
      /*METODO POST*/
  agregar(tituloEdu:string, institucionEdu:string){
      this.datoPorfolio.agregarTitulo({tituloEdu, institucionEdu}).subscribe(data=>{
        console.log(tituloEdu)
        this.ngOnInit()
      })
  }
      /*METODO DELETE*/
  eliminar(titulo_id:any){
    console.log(titulo_id)
    this.datoPorfolio.eliminarTitulo(titulo_id).subscribe((resultado:any) =>{
      
      this.ngOnInit()
    } )
  }
    /*METODO PUT */
    idFormacion:any;
    obtenerIdFormacion(id:any){
      this.idFormacion = id
      console.log(id)
    }

    editarFormacion(idEdu:any, tituloEdu:any, institucionEdu:any){
      this.datoPorfolio.actualizarFormacion({idEdu, tituloEdu, institucionEdu}).subscribe(data =>{
        this.ngOnInit()
      })
    }
}
