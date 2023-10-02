import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalModule } from './principal/principal.module';
import { GarrafonModule } from './garrafon/garrafon.module';
import { LimpiezaModule } from './limpieza/limpieza.module';
import { CumpleModule } from './cumple/cumple.module';


import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; // Importa la configuración regional de español
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PrincipalModule,
    GarrafonModule,
    LimpiezaModule,
    CumpleModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }, // Establece el idioma en español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
