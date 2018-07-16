import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/dashboard-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './app-dashboard.component';
import { TableComponent } from './table/dashboard-table.component';
import { DashboardService } from './dashboard.service';
import { TableOptionsComponent } from './table/table-options/table-options.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DashboardComponent, FormComponent, TableComponent, TableOptionsComponent],
  providers: [DashboardService],
  exports:[DashboardComponent]
})
export class DashboardModule { }
