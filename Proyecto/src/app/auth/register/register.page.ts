import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup, } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder ) { 
    this.registrarForm = this.formBuilder.group({
      nombre:['',Validators.required],
      correo:['',Validators.required,Validators.email],
      contrasena:['',Validators.required,Validators.minLength(6)],
      ConfirmacionContrasena:['',Validators.required],
    });

  }

  ngOnInit() {}
  get f() {return this.registrarForm.controls; }
  

  registrar(){
    console.log(this.registrarForm.valid);
  }



}
