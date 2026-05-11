import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionManagementComponent } from './core/components/promotion-management/promotion-management.component';
import { PromotionLandingPageComponent } from './core/components/promotion-landing-page/promotion-landing-page.component';

const routes: Routes = [
  { path:'promotion/create',component:PromotionManagementComponent },
  { path:'',component:PromotionLandingPageComponent,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
