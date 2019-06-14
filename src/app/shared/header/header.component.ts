import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/service.index';
import { Profesional } from 'src/app/models/profesional.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  profesional: Profesional;
  
  constructor( public _profesionalService: ProfesionalService) { }

  ngOnInit() {
    this.profesional = this._profesionalService.profesional;
  }
  

}
