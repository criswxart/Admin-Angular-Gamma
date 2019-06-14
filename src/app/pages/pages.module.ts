import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { GraficosComponent } from './graficos/graficos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
//ng2-Charts
import { ChartsModule } from 'ng2-charts';

//Pipe Module
import { PipesModule } from '../pipes/pipes.module';

//Modulos
import { SharedModule } from '../shared/shared.module';
//Rutas
import { PAGES_ROUTES } from './pages.routes';
import { CalendarioComponent } from './calendario/calendario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearprofesionalComponent } from './profesionales/crearprofesional.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrearusuarioComponent } from './usuarios/crearusuario.component';

@NgModule({

    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        GraficosComponent,
        UsuariosComponent,
        ProfesionalesComponent,
        CalendarioComponent,
        CrearprofesionalComponent,
        CrearusuarioComponent
               
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgessComponent,
        GraficosComponent,
        UsuariosComponent,
        ProfesionalesComponent,
        CalendarioComponent
        
    ],
    imports:[
        SharedModule,
        ChartsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        FormsModule,
        PipesModule,
        PAGES_ROUTES
    ]

})
export class PagesModule { }