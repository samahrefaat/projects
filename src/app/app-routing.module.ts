import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealDetailsComponent } from './pages/products/meal-details/meal-details.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';


const routes: Routes = [
  {
    path:'product-list',
    component: ProductListComponent
},
{
  path:'product-form',
  component: ProductFormComponent
},
{
  path:'meal-details/:id',
  component: MealDetailsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
