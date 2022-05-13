import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { PortfolioLoggedComponent } from './components/portfolio-logged/portfolio-logged.component';


const routes: Routes = [
  {path: 'portfolio-logged', component:PortfolioLoggedComponent, ...canActivate(() => redirectUnauthorizedTo(['login']))},
  {path: 'login', component:LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
