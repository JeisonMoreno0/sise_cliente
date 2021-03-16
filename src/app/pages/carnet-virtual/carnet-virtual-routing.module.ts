import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnetVirtualPage } from './carnet-virtual.page';

const routes: Routes = [
  {
    path: '',
    component: CarnetVirtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnetVirtualPageRoutingModule {}
