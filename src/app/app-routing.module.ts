import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta raíz
  { path: 'products', component: ProductsComponent },  // Productos
  { path: 'products/:productId', component: ProductDetailComponent },  // Detalle del producto
  { path: 'contact', component: ContactComponent },  // Contacto
  { path: '**', redirectTo: '', pathMatch: 'full' },  // Redirección de rutas desconocidas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
