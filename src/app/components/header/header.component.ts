import { Component, OnInit, Input } from '@angular/core';
/*1)importar el servicio */
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() botonLogin = ""

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


  /************Rutas barra de navegacion ***********************/
  acercaDe(){
    this.router.navigate(['acerca-de-logged'])
  }

  skills(){
    this.router.navigate(['skills'])
  }

  proyectos(){
    this.router.navigate(['proyectos-logged'])
  }
  experiencia(){
    this.router.navigate(['experiencia'])
  }

  /***********************Contacto ****************/
  contacto(){
    this.router.navigate(['contacto'])
  }
}
/*4)Ir a app.module.ts Importar el modulo HttpClient*/