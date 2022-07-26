import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-skills-logged',
  templateUrl: './skills-logged.component.html',
  styleUrls: ['./skills-logged.component.scss']
})
export class SkillsLoggedComponent implements OnInit {

  constructor(private storageService: StorageService,private habilidadesService: HabilidadesService) { }

  datos:any
  ngOnInit(): void {
    this.habilidadesService.obtenerDatos().subscribe( data =>{
      this.datos = data
      console.log("METODO GET HABILIDADES: "+this.datos)
    })
  }
 
  //METODO POST
  enviar(imagenHab:any, nombreHab:any){

    this.habilidadesService.enviarI({imagenHab, nombreHab}).subscribe(data =>{
      console.log("METODO POST HABILIDAD: " + data)
      this.ngOnInit()
    })

    
  }

    /****************Codigo para subir imagenes a Firebase ****************/
  // event: accede al evento
  //event.target: accede al input
  //event.target.files: accede a la carpeta files que es donde estan
  //las imagenes que se suben

  /******Funcion para obtener la imagen desde el HTML */

  imagenes:any
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
