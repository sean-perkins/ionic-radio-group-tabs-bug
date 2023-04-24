import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LegacyPage } from './legacy.page';

import { LegacyPageRoutingModule } from './legacy-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegacyPageRoutingModule
  ],
  declarations: [LegacyPage]
})
export class LegacyPageModule { }
