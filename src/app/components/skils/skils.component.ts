import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {

  constructor(private habilidadesService: HabilidadesService) { }

  datos:any
  ngOnInit(): void {

    this.habilidadesService.obtenerDatos().subscribe( data =>{
      this.datos = data
      console.log("METODO GET HABILIDADES: "+this.datos)
    })
  }

}
