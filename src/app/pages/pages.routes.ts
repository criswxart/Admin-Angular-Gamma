import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { GraficosComponent } from './graficos/graficos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearusuarioComponent } from './usuarios/crearusuario.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { CrearprofesionalComponent } from './profesionales/crearprofesional.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { LoginGuardGuard } from '../services/service.index';

const pagesRoutes: Routes = [

    {
        path:'',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgessComponent },
            { path: 'graficas', component: GraficosComponent },
            { path: 'calendario', component: CalendarioComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'usuarios/crear', component: CrearusuarioComponent },
            { path: 'profesionales', component: ProfesionalesComponent },
            { path: 'profesionales/crear', component: CrearprofesionalComponent },
            { path: '', redirectTo:'/dashboard', pathMatch: 'full' }

        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);