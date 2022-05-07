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
    return this.http.get<any>('https://proyectos01.herokuapp.com/ver/personas')
  }
  /*************METODO POST ************/
  enviarI(dato:any): Observable<any>{
      return this.http.post<any>('https://proyectos01.herokuapp.com/new/persona',dato)
  }

  /**************METODO DELETE ***************/
  eliminarProyecto(id:any):Observable<any>{
    return this.http.delete(`${'https://proyectos01.herokuapp.com/delete'}/${id}`)
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
