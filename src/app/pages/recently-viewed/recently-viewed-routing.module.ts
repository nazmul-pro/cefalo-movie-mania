import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentlyViewedComponent } from './recently-viewed.component';

const routes: Routes = [
  {
    path: '',
    component: RecentlyViewedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentlyViewedRoutingModule { }
