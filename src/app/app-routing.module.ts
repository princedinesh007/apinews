import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
                     {path:"",redirectTo:"/general",pathMatch:"full"},
                     {path:"general",component:HomeComponent},
                     {path:"business",component:BusinessComponent},
                     {path:"entertainment",component:EntertainmentComponent},
                     {path:"health",component:HealthComponent},
                     {path:"sports",component:SportComponent},
                     {path:"technology",component:TechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
