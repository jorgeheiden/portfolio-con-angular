import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth) { }

  register(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login (email: string, password:string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }




  /*
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
*/
}
