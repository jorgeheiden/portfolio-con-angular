import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
/*1)Importar el modulo httpClient */
import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { PortfolioLoggedComponent } from './components/portfolio-logged/portfolio-logged.component';
import { AcercaDeLoggedComponent } from './components/acerca-de-logged/acerca-de-logged.component';
import { ProyectosLoggedComponent } from './components/proyectos-logged/proyectos-logged.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { OrderModule } from 'ngx-order-pipe';
import { SkillsLoggedComponent } from './components/skills-logged/skills-logged.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ExperienciaLoggedComponent } from './components/experiencia-logged/experiencia-logged.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AcercaDeComponent,
    SkilsComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    PortfolioLoggedComponent,
    AcercaDeLoggedComponent,
    ProyectosLoggedComponent,
    ContactoComponent,
    SkillsLoggedComponent,
    ExperienciaComponent,
    ExperienciaLoggedComponent
  ],
  imports: [
    OrderModule,
    BrowserModule,
    AppRoutingModule,
    /*2) Especificar el modulo importado: */
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
