import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonaIngresadaComponent } from './persona-ingresada/persona-ingresada.component';
import {HttpClientModule} from '@angular/common/http';
import { IngresoService } from './servicio/ingreso.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaIngresadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
