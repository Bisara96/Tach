import { DashboardComponent } from './../partials/components/dashboard/dashboard.component';
import { IssuesComponent } from './../partials/components/issues/issues.component';
import { TaskComponent } from './../partials/components/task/task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../partials/components/main/main.component';

const routes: Routes = [
 {path: 'main', component: MainComponent, children: [
  {path: 'tasks', component: TaskComponent, outlet: 'tab'},
  {path: 'issues', component: IssuesComponent, outlet: 'tab'},
  {path: 'dashboard', component: DashboardComponent, outlet: 'tab'}
 ]},
 {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule { }
