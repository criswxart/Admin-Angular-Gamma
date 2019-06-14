import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: string = 'profesional'): any {

    let url = URL_SERVICIOS + '/img';

    if ( !img ) {
      return url + '/trabajadores/xxx';
    }

    switch ( tipo ) {

      case 'trabajador':
        url += '/trabajadores/' + img;
      break;
      default:
        console.log('tipo de imagen no existe, usuario, medicos, hospitales');
        url += '/trabajadores/xxx';
    }
    return url;
  }
}
