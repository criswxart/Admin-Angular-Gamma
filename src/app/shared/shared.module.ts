import { NgModule } from "@angular/core";

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//PipeModule
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations:[
       BreadcrumbsComponent,
       FooterComponent,
       HeaderComponent,
       NopagefoundComponent,
       SidebarComponent
    ],
    exports: [
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]

})
export class SharedModule { }