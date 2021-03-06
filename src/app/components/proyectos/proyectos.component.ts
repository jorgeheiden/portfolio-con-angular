import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { StorageService } from 'src/app/servicios/storage.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor(private storageService: StorageService) { }


  datos:any
  ngOnInit(): void {
    this.storageService.obtenerDatos().subscribe(data =>{
      this.datos =data
    //  console.log(data)
     // this.imagenes = data
     // console.log(this.imagenes.nombre)
    })
  }

  /********* METODO POST ********/
  imagenes:any
  
  enviar(imagen:any, proyecto:any, link:any){

    this.storageService.enviarI({imagen, proyecto, link}).subscribe(data =>{
      console.log(data)
      this.ngOnInit()
    })

    
  }
  /*************METODO DELETE ***************/
  eliminar(proyecto_id:any){
    this.storageService.eliminarProyecto(proyecto_id).subscribe((resultado:any) =>{

      this.ngOnInit()
    })
  }

  /****************Codigo para subir imagenes a Firebase ****************/
  // event: accede al evento
  //event.target: accede al input
  //event.target.files: accede a la carpeta files que es donde estan
  //las imagenes que se suben

  /******Funcion para obtener la imagen desde el HTML */

  
  cargarImagen(event:any){
  
    let archivos = event.target.files
    //file reader/lector lee el archivo que ingresa
    //y permite transformarlo en formato base 64
    let nombre = "img"
    
    for(let i = 0; i < archivos.length; i++){
      let reader = new FileReader();
      reader.readAsDataURL(archivos[0]);
      reader.onloadend = () =>{
        this.storageService.subirImagen(nombre + Date.now(), reader.result).then(urlImagen=>{
          
          /**************LINK DE LA IMAGEN ***************/
          console.log(urlImagen)
          this.imagenes = urlImagen
          
        })
        console.log(reader.result)
      }


    }



  }
}
