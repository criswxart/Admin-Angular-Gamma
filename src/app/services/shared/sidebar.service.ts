import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Personal',
      icono:'mdi mdi-account-card-details',
      submenu:[
        {titulo: 'Profesionales', url:'/profesionales'},
        {titulo: 'Usuarios', url:'/usuarios'}
      ]
    },
    {
      titulo: 'Plan de intervención',
      icono:'mdi mdi-group',
      submenu:[
        {titulo: 'Profesionales', url:'/profesionales'},
        {titulo: 'Usuarios', url:'/usuarios'}
      ]
    },
    {
      titulo: 'Calendario',
      icono:'mdi mdi-calendar-multiple',
      submenu:[
        {titulo: 'Citas', url:'/calendario'},
        {titulo: 'Usuarios', url:'/usuarios'}
      ]
    },
    {
      titulo: 'Estadisticas',
      icono:'mdi mdi-poll',
      submenu:[
        {titulo: 'Personal', url:'/graficos'},
        {titulo: 'Usuarios', url:'/usuarios'}
      ]
    },
    {
      titulo: 'Intervenciones',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo: 'Profesionales', url:'/profesionales'},
        {titulo: 'Usuarios', url:'/usuarios'}
      ]
    }
  ]; 
  
  constructor() { }
}
