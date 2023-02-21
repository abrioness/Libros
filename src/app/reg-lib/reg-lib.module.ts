import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegLibPageRoutingModule } from './reg-lib-routing.module';

import { RegLibPage } from './reg-lib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegLibPageRoutingModule
  ],
  declarations: [RegLibPage]
})
export class RegLibPageModule {}
