import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private datosPortfolio:PortfolioService) { }
   /*Acceder al servicio */
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }

}
