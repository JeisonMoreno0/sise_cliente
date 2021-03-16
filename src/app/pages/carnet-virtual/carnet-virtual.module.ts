import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnetVirtualPageRoutingModule } from './carnet-virtual-routing.module';

import { CarnetVirtualPage } from './carnet-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnetVirtualPageRoutingModule
  ],
  declarations: [CarnetVirtualPage]
})
export class CarnetVirtualPageModule {}
