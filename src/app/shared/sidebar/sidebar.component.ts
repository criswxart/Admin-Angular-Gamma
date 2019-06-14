import { Component, OnInit } from '@angular/core';
import { SidebarService,ProfesionalService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public _sidebar: SidebarService,
              public _profesionalService: ProfesionalService) { }

  ngOnInit() {
  }

  
}
