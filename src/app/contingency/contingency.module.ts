import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContingencyRoutingModule } from './contingency-routing.module';
import { ContingenciesComponent } from './contingencies/contingencies.component';


@NgModule({
  declarations: [ContingenciesComponent],
  imports: [
    CommonModule,
    ContingencyRoutingModule
  ]
})
export class ContingencyModule { }
