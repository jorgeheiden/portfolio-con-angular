import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.app().storage().ref();

  constructor(private http:HttpClient) { }

  /**************METODO GET **********/
  obtenerDatos():Observable<any>{
    return this.http.get<any>('https://back-end-arg-prog-2.herokuapp.com/proyectos/ver/proyectos')
  }
  /*************METODO POST ************/
  enviarI(dato:any): Observable<any>{
      return this.http.post<any>('https://back-end-arg-prog-2.herokuapp.com/proyectos/nuevo',dato)
  }

  /**************METODO DELETE ***************/
  eliminarProyecto(id:any):Observable<any>{
    return this.http.delete(`${'https://back-end-arg-prog-2.herokuapp.com/proyectos/delete'}/${id}`)
  }


/************************************/

  async subirImagen(nombre:string, imgBase64:any){
    
    try{
      let respuesta = await this.storageRef.child("users/" + nombre).putString(imgBase64, 'data_url');


      return await respuesta.ref.getDownloadURL();


    }catch(err){
      console.log(err);
      return null;
    }
  }

}
