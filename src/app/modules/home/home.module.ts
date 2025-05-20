import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideBarComponent } from '@app/shared/components/side-bar/side-bar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarComponent
  ]
})
export class HomeModule { }
