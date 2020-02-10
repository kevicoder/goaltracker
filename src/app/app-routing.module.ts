import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'goals',
    pathMatch: 'full'
  },
  {
    path: 'goals',
    loadChildren: () => import('./goal/goal.module').then(g => g.GoalModule)
  },
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full'
  },
  {
    path: 'steps',
    loadChildren: () => import('./step/steps.module').then(g => g.StepsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
