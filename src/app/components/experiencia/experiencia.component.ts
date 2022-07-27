import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  constructor(private experienciaService: ExperienciaService) { }
datos:any
  ngOnInit(): void {
    this.experienciaService.obtenerDatos().subscribe( data =>{
      this.datos = data
      console.log("METODO GET TRABAJO: "+this.datos)
    })
  }

}
