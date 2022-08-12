import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SoccerComponent } from './soccer/soccer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"soccer",component:SoccerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
