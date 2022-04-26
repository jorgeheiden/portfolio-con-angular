import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
/*1)Configurar, especificar las rutas de la aplicacion: */
const routes: Routes = [
  /*a)Ruta para acceder al portfolio: Ruta= path:'portfolio', Componente= component:PortfolioComponent*/
  {path:'portfolio', component:PortfolioComponent},
  /*b)Ruta para acceder a iniciar-sesion */
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
