import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  //METODO GET
  obtenerDatos():Observable<any>{
    return this.http.get<any>('https://back-end-arg-prog-2.herokuapp.com/habilidad/ver/habilidades')
  }

  //METODO POST
  enviarI(dato:any): Observable<any>{
    return this.http.post<any>('https://back-end-arg-prog-2.herokuapp.com/habilidad/nuevo',dato)
}

}
