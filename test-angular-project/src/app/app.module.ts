import { MaterialModule } from './partials/modules/material/material.module';
import { RoutesModule } from './routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './partials/components/main/main.component';
import { NavBarComponent } from './partials/components/nav-bar/nav-bar.component';
import { ProjectInfoComponent } from './partials/components/project-info/project-info.component';
import { TabHolderComponent } from './partials/components/tab-holder/tab-holder.component';
import { TaskComponent } from './partials/components/task/task.component';
import { IssuesComponent } from './partials/components/issues/issues.component';
import { DashboardComponent } from './partials/components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    ProjectInfoComponent,
    TabHolderComponent,
    TaskComponent,
    IssuesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
