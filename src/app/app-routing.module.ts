import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { PortfolioLoggedComponent } from './components/portfolio-logged/portfolio-logged.component';
import { AcercaDeLoggedComponent } from './components/acerca-de-logged/acerca-de-logged.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosLoggedComponent } from './components/proyectos-logged/proyectos-logged.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsLoggedComponent } from './components/skills-logged/skills-logged.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaLoggedComponent } from './components/experiencia-logged/experiencia-logged.component';


const routes: Routes = [
  {path: 'portfolio-logged', component:PortfolioLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['portfolio']))},
  {path: 'login', component:LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: 'portfolio-logged', pathMatch: 'full'},
  {path: 'acerca-de-logged', component: AcercaDeLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['acercade']))},
  {path: 'acercade', component: AcercaDeComponent},
  {path: 'skills', component: SkilsComponent},
  {path: 'skills-logged', component: SkillsLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['skills']))},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'proyectos-logged', component: ProyectosLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['proyectos']) ) },
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'experiencia-logged', component: ExperienciaLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['experiencia']))},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
