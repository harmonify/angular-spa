import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionCreateComponent } from './division/division-create/division-create.component';
import { DivisionEditComponent } from './division/division-edit/division-edit.component';
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
    data: {
      breadcrumb: 'Division',
    },
    children: [
      {
        path: '',
        component: DivisionComponent,
      },
      {
        path: 'create',
        component: DivisionCreateComponent,
        data: {
          breadcrumb: 'Create',
        },
      },
      // {
      //   path: ':id',
      //   component: DivisionShowComponent,
      //   data: {
      //     breadcrumb: 'Division',
      //   },
      // },
      {
        path: ':id/edit',
        component: DivisionEditComponent,
        data: {
          breadcrumb: 'Edit',
        },
      },
    ],
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
