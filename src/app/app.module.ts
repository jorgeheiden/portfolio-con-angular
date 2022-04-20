import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
/*Importar el modulo httpClient */
import { HttpClientModule } from '@angular/common/http';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*Especificar el modulo importado: */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
