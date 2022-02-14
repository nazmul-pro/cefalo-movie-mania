import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentlyViewedRoutingModule } from './recently-viewed-routing.module';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    RecentlyViewedComponent
  ],
  imports: [
    CommonModule,
    RecentlyViewedRoutingModule,
    MaterialModule,
    SharedUiModule,
  ]
})
export class RecentlyViewedModule { }
