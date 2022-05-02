/*2) importar modulo HttpClient */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*4) Importar modulo Observable */
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  /*3)Se crea un objeto llamado http, se Inyecta el modulo http Client (private http:HttpClient) */
  constructor(private http:HttpClient) { }
  
  /* Este codigo contiene un metodo get a una base de datos local, simulada en un JSON */
  // 1) Se crea una funcion obtener datos*/
  //5)Se define la funcion como Observable : Observable<any>
  //obtenerDatos(): Observable<any> {
  // 6)se llama al metodo get.
  //  Entre parentesis deberia ir un url de la API con el request */
  //  return this.http.get('./assets/data/data.json');
  // }
  

  /*METODO GET*/
    obtenerDatos(): Observable<any>{
      return this.http.get<any>('https://api-con-springboot.herokuapp.com/ver/personas')
    }
}
