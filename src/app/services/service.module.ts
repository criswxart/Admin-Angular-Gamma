import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarService, SharedService, ProfesionalService, LoginGuardGuard } from './service.index'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    SidebarService,
    SharedService,
    ProfesionalService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
