import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BoxComponent } from './box/box.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { ChartLineComponent } from './chart-line/chart-line.component';
import { ChartBarComponent } from './chart-bar/chart-bar.component';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { TableLogsComponent } from './table-logs/table-logs.component';
import {TableModule} from 'primeng/table';
import { InputCalendarComponent } from './input-calendar/input-calendar.component';
@NgModule({
  declarations: [
    DashboardComponent,
    BoxComponent,
    ChartBarComponent,
    ChartLineComponent,
    ChartPieComponent,
    TableLogsComponent,
    InputCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule, 
    CalendarModule,
    CardModule,
    ReactiveFormsModule, 
    ButtonModule,   
    InputTextModule,
    ChartModule,
    CalendarModule,
    TableModule
  ]
})
export class DashboardModule {

}
