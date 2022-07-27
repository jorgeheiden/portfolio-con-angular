import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  //METODO GET
  obtenerDatos():Observable<any>{
    return this.http.get<any>('https://back-end-arg-prog-2.herokuapp.com/trabajo/ver/trabajos')
  }

  //METODO POST
  enviarI(dato:any): Observable<any>{
    return this.http.post<any>('https://back-end-arg-prog-2.herokuapp.com/trabajo/nuevo',dato)
}

 /**************METODO DELETE ***************/
 eliminarTrabajo(id:any):Observable<any>{
  return this.http.delete(`${'https://back-end-arg-prog-2.herokuapp.com/trabajo/delete'}/${id}`)
}

 /*********METODO PUT ************/
 actualizarTrabajo(dato:any):Observable<any>{
  return this.http.put<any>('https://back-end-arg-prog-2.herokuapp.com/trabajo/update',dato)
}

}
