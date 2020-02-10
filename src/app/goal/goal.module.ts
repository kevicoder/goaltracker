import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';
import { GoalRoutingModule } from './goal-routing.module';



@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    GoalRoutingModule
  ]
})
export class GoalModule { }
