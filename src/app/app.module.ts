import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { ShoppingCartItemComponent } from './components/scanned-item/scanned-item.component';

import { environment } from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import { ScannerComponent } from './components/scanner/scanner.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartItemComponent,
    ScannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // PWA support
    ServiceWorkerModule.register('ngsw-worker.js'),
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => {
        return {
          enabled: environment.production,
          registrationStrategy: 'registerImmediately'
        };
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
