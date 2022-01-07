import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionComponent } from './division/division.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    },
  },
  {
    path: 'division',
    component: DivisionComponent,
    data: {
      breadcrumb: 'Division',
    },
  },
  {
    path: 'other',
    component: OtherComponent,
    data: {
      breadcrumb: 'Other',
    },
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
