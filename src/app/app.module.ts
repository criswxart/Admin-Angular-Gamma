import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

//Rutas
import { APP_ROUTES } from './app.routes';
//Modulos
import { PagesModule } from './pages/pages.module';
//Servicios
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ServiceModule,
    AuthModule,
    APP_ROUTES
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
