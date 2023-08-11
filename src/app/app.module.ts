import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesionComponent } from './layout/public/sesion/sesion.component';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';


@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
