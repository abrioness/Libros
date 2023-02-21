import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegLibPage } from './reg-lib.page';

const routes: Routes = [
  {
    path: '',
    component: RegLibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegLibPageRoutingModule {}
