import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionsCardPageComponent } from './directions-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: DirectionsCardPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionsCardPageRoutingModule { }
