import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfesionalService } from 'src/app/services/service.index';
import Swal from 'sweetalert2';
import { Profesional } from 'src/app/models/profesional.models';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;
  constructor(public router:Router,
              public _profesionalService: ProfesionalService) { }

  ngOnInit() {
    init_plugins();
    this.email = localStorage.getItem('email') || '';

    if(this.email.length > 1){
      this.recuerdame = true;
    }
  }

  ingresar(formulario: NgForm){

    let profesional = new Profesional(
      null,
      null,
      null,
      null,
      formulario.value.email,
      formulario.value.password
    );
    this._profesionalService.login(profesional, formulario.value.recuerdame)
    .subscribe( resp => {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Acceso permitido',
        text: 'Bienvendio '+ profesional.nombre,
        showConfirmButton: false,
        timer: 2000
      })
    })
    this.router.navigate(['/dashboard']);

  }
}
