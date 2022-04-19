import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    /*se llama al metodo get.
    Entre parentesis deberia ir un url con el request */
    return this.http.get('./assets/data/data.json')
  }
}
