import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Importar
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
   //Crear un formulario que se enlazara con el template
  form:FormGroup;
  //Incyectar el servicio router
  constructor(private formBuilder:FormBuilder, private logservice:LoginService, private router:Router) { 
    //Inicializar el formulario
    this.form= this.formBuilder.group({
      //especificar el grupo de forms control
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5)]]
    })
  }

  usuario={
    email:'',
    password:''
  }

  ingresar(){
    console.log(this.usuario);
    const {email,password}= this.usuario
    this.logservice.login(email, password).then( res=>{
      console.log("se logeo: ",res)
      
    })
  }


  ngOnInit(): void {
  }

  // Propiedades para acceder a los formControl
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password')
  }

  

}
