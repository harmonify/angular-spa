import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppControlSidebarComponent } from './app-control-sidebar/app-control-sidebar.component';
import { AppPreloaderComponent } from './app-preloader/app-preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSidebarComponent,
    AppContentComponent,
    AppFooterComponent,
    AppControlSidebarComponent,
    AppPreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
