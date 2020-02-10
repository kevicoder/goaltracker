import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskRoutingModule } from './risk-routing.module';
import { RisksComponent } from './risks/risks.component';


@NgModule({
  declarations: [RisksComponent],
  imports: [
    CommonModule,
    RiskRoutingModule
  ]
})
export class RiskModule { }
