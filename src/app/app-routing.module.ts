import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoHomeComponent } from './demo-home/demo-home.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DemoLoginComponent
  },
  {
    path: 'home',
    component: DemoHomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



