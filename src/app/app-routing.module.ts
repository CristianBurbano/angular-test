import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ProductDetailComponent } from './components/productdetail/productdetail.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path:"first-component",
    component: FirstComponent
  },
  {
    path:"second-component",
    component: SecondComponent
  },
  { 
    path:"product-detail/:id",
    component: ProductDetailComponent
  },

  {
    path: "",
    redirectTo: "first-component",
    pathMatch:"full"
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
