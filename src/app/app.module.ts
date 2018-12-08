import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { NavComponent } from './components/nav/nav.component';
import { SubNavsComponent } from './components/sub-navs/sub-navs.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InstruccionesComponent,
    RegistrosComponent,
    MensajesComponent,
    NavComponent,
    SubNavsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
