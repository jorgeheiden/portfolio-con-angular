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
      return this.http.get<any>('https://back-end-arg-prog-2.herokuapp.com/educacion/ver/educaciones')
    }

    /*METODO POST*/
    agregarTitulo(dato:any): Observable<any>{
      return this.http.post<any>('https://back-end-arg-prog-2.herokuapp.com/educacion/nuevo', dato)
      
    }
    /*METODO DELETE*/
    eliminarTitulo(id:any):Observable<any>{
      return this.http.delete(`${'https://back-end-arg-prog-2.herokuapp.com/educacion/delete'}/${id}`)
    }

    /*Funcion llamada en PROYECTOS*/
    obtenerImagenes():Observable<any>{
      return this.http.get('./assets/data/data.json')
    }

    /*****************Metodo Post Proyectos **********************/

    enviarI(d:any): Observable<any>{
      console.log(d)
      return this.http.post<any>('https://proyectos01.herokuapp.com/new/persona', d)
    }

    /*******************METODO PUT **************/
    actualizarFormacion(dato: any):Observable<any>{
      return this.http.put<any>('https://back-end-arg-prog-2.herokuapp.com/educacion/update', dato)
    }
}
