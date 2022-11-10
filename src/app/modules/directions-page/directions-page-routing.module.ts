import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionsResolver } from 'src/app/services/directions.resolver';
import { DirectionsPageComponent } from './directions-page.component';

const routes: Routes = [
  {
    path: '',
    component: DirectionsPageComponent,
  },
  {
    path: ':id',
    resolve: { data: DirectionsResolver },
    loadChildren: () => import('./modules/directions-card-page/directions-card-page.module').then(m => m.DirectionsCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsPageRoutingModule { }
