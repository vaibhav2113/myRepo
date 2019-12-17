import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicServiceComponent} from '../app/basic-service/basic-service.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';


const routes: Routes = [
  {
    path: 'service',
    component: BasicServiceComponent
  },
  { path: 'error', component: CustomErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
