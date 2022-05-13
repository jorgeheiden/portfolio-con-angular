import { Component, OnInit } from '@angular/core';
/*1)importar el servicio */
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /*2)Inyectar el servicio (private datosPortfolio:PortfolioService)  */
  constructor(private datosPortfolio:PortfolioService, private router:Router) { }
   /*Acceder al servicio */
  ngOnInit(): void {
    /*3)Acceder al servicio this.datosPortfolio.obtenerDatos() */
    /*4)Suscribierme en el componente .subscribe(data =>{
      console.log(data)
    });*/
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      /*6)Se imprime en consola el json de prueba console.log(data)*/
      
    });
  }

  log(){
    this.router.navigate(['login'])
  }
}
/*4)Ir a app.module.ts Importar el modulo HttpClient*/