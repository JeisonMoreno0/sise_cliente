import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnetVirtualPageRoutingModule } from './carnet-virtual-routing.module';

import { CarnetVirtualPage } from './carnet-virtual.page';
import {NgxQRCodeModule} from 'ngx-qrcode2'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    CarnetVirtualPageRoutingModule
  ],
  declarations: [CarnetVirtualPage]
})
export class CarnetVirtualPageModule {}
