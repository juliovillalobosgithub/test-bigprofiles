import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './core/interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "it-IT" },
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
