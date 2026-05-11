import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ComponentDashBoard } from './shared/components/component-dashboards/component-dashboard';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { DataService } from './shared/services/data.service';
import { Configuration } from '../assets/config/configuration.service';

export function appConfigInit(configService: Configuration) {
  return () => {
    return configService.loadConfiguration();
  };
}

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigInit,
      multi: true,
      deps: [Configuration]
    },
    ComponentDashBoard,
    { 
      provide: MatPaginatorIntl, useClass: DataService 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
