import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModernPage } from './modern.page';

import { ModernPageRoutingModule } from './modern-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModernPageRoutingModule
  ],
  declarations: [ModernPage]
})
export class ModernPageModule { }
