import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill/bill.component';
import { MaterialModule } from '../material/material.module';
import { MenuSelectionComponent } from './menu.selection/menu.selection.component';




@NgModule({
  declarations: [BillComponent, MenuSelectionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CustomerModule { }
