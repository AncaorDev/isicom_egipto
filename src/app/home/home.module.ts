import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
