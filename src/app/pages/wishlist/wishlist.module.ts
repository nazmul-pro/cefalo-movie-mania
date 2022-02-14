import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MaterialModule,
    SharedUiModule,
  ]
})
export class WishlistModule { }
