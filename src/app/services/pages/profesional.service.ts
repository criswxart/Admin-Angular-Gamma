import { Injectable } from '@angular/core';
import { Profesional } from 'src/app/models/profesional.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import {map} from 'rxjs/operators';


import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  profesional: Profesional;
  token: string;

  constructor(public http:HttpClient,
              public router: Router) { 
    this.cargarStorage();
  }
  login( profesional: Profesional, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', profesional.email );
    }else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, profesional).pipe(
      map((resp: any) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('profesional', JSON.stringify(profesional));
        return true;
      }
    ));
    }
    estaLogueado(){
      return (this.token.length >5) ? true : false;
    }
 
  guardarStorage(id: string, token: string, profesional: Profesional){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('profesional', JSON.stringify(profesional));
    this.profesional = profesional;
    this.token=token;

  }
  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.profesional = JSON.parse( localStorage.getItem('profesional') );
    } else {
      this.token = 'null';
      this.profesional = null;
    }

  }
  
  logout(){
    this.profesional = null;
    this.token = '';

    localStorage.clear();
    this.router.navigate(['/login']);
  }

  crearProfesional(profesional: Profesional){

    let url = URL_SERVICIOS + '/trabajador';
    return this.http.post(url, profesional);
  }
}
