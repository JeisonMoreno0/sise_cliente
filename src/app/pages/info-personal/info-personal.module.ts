import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { InfoPersonalPageRoutingModule } from './info-personal-routing.module';

import { InfoPersonalPage } from './info-personal.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InfoPersonalPageRoutingModule
  ],
  declarations: [InfoPersonalPage]
})
export class InfoPersonalPageModule {}
