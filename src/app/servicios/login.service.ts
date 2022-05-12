import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private loginService:AngularFireAuth) { }

  async register(email:string, password:string){
    try{
      return await this.loginService.createUserWithEmailAndPassword(email, password);
      
    }catch(err){
      console.log("error en login: ", err);
      return null;
    }
  }

  async login(email:string, password:string){
    try{
      return await this.loginService.signInWithEmailAndPassword(email, password);
     
    }catch(err){
      console.log("error en login: ", err);
      return null;
    }
  }

}
