import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeTablePageComponent } from './time-table-page.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTablePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTablePageRoutingModule { }
