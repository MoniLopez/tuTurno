import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'; // Importa la configuración regional de español
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }, // Establece el idioma en español
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
