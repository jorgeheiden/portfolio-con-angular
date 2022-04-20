import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  /*Se crea un objeto llamado http, se Inyecta el modulo http Client (private http:HttpClient) */
  constructor(private http:HttpClient) { }
  
  /*Se crea una funcion obtener datos
    Se define la funcion como Observable*/
  obtenerDatos(): Observable<any> {
    /*se llama al metodo get.
    Entre parentesis deberia ir un url de la API con el request */
    return this.http.get('https://catfact.ninja/fact');
  }
}
