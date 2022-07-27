import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-experiencia-logged',
  templateUrl: './experiencia-logged.component.html',
  styleUrls: ['./experiencia-logged.component.scss']
})
export class ExperienciaLoggedComponent implements OnInit {

  constructor(private storageService: StorageService, private experienciaService: ExperienciaService) { }

  datos:any
  ngOnInit(): void {
    this.experienciaService.obtenerDatos().subscribe( data =>{
      this.datos = data
      console.log("METODO GET TRABAJO: "+this.datos)
    })
  }

  //METODO POST
  enviar(imagenTrab:any, nombreTrab:any, descripcionTrab:any){

    this.experienciaService.enviarI({imagenTrab, nombreTrab, descripcionTrab}).subscribe(data =>{
      console.log("METODO POST TRABAJO: " + data)
      this.ngOnInit()
    })
  }

  /*************METODO DELETE ***************/
  eliminar(trabajo_id:any){
    this.experienciaService.eliminarTrabajo(trabajo_id).subscribe((resultado:any) =>{

      this.ngOnInit()
    })
  }

    /*************METODO PUT *******************/
    idHabilidad:any
    obtenerIdTrabajo(id:any){
      console.log("Este es el id: " + id)
      this.idHabilidad = id
    }
    actualizar(idTrab:any, imagenTrab:any, nombreTrab:any, descripcionTrab:any){
      this.experienciaService.actualizarTrabajo({idTrab, imagenTrab, nombreTrab, descripcionTrab}).subscribe(data =>{
        console.log(data)
        this.ngOnInit()
      })
    }

  imagenes:any

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
