import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AdvicesPageComponent} from './pages/advices-page/advices-page.component';
import {AboutusPageComponent} from './pages/aboutus-page/aboutus-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', component: DashboardComponent ,pathMatch: 'full'},
  {path: 'advices', component: AdvicesPageComponent},
  {path: 'aboutus', component:AboutusPageComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
