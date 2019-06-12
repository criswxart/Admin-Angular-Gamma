import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { CreateComponent } from './pages/profesionales/create.component';


const appRoutes: Routes = [

    {
        path:'',
        component: PagesComponent,
        children:[
            { path: 'dashboard', component: DashboardComponent },
            { path: 'register', component: LoginComponent },
            { path: 'progress', component: ProgessComponent },
            { path: 'graficas', component: GraficosComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'profesionales', component: ProfesionalesComponent },
            { path: 'profesionales/create', component: CreateComponent },
            { path: '', redirectTo:'/dashboard', pathMatch: 'full' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '', component: PagesComponent },
    { path: '**', component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });