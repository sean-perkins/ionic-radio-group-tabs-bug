import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModernPage } from './modern.page';

const routes: Routes = [
  {
    path: '',
    component: ModernPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModernPageRoutingModule { }
