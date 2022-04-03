import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { MainComponent } from './pages/main/main.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:valor', component: SearchComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
