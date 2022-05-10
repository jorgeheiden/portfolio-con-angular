import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
//Importar
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //Crear un formulario que se enlazara con el template
  form:FormGroup;
  //Incyectar el servicio router
  constructor(private formBuilder:FormBuilder,) { 
    //Inicializar el formulario
    this.form= this.formBuilder.group({
      //especificar el grupo de forms control
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5)]]
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
