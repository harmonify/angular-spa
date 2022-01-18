import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppBreadcrumbComponent } from './app-breadcrumb/app-breadcrumb.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppContentWrapperComponent } from './app-content-wrapper/app-content-wrapper.component';
import { AppControlSidebarComponent } from './app-control-sidebar/app-control-sidebar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppPreloaderComponent } from './app-preloader/app-preloader.component';
import { HomeComponent } from './home/home.component';
import { DivisionComponent } from './division/division.component';
import { OtherComponent } from './other/other.component';
import { DivisionEditComponent } from './division/division-edit/division-edit.component';
import { DivisionCreateComponent } from './division/division-create/division-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppBreadcrumbComponent,
    AppSidebarComponent,
    AppContentWrapperComponent,
    AppControlSidebarComponent,
    AppFooterComponent,
    AppPreloaderComponent,
    HomeComponent,
    DivisionComponent,
    OtherComponent,
    DivisionEditComponent,
    DivisionCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
