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
  constructor(private datoPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datoPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      /*2)Asignar a la variable los valores obtenidos desde el json: this.miPortfolio=data;*/
      this.miPortfolio=data;
    })
  }

}
