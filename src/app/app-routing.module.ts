import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppComponent } from './app.component';
import { JeenbodyComponent } from './jeenbody/jeenbody.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'' ,component: JeenbodyComponent },
  {path:'home' ,component: JeenbodyComponent,data: {animation: 'Home'} },
   {path:'products' ,component: ProductsComponent , data: {animation: 'Products'} },
  {path:'about' ,component: AboutComponent, data: {animation: 'About'} },
  {path:'contact' ,component: ContactFormComponent, data: {animation: 'Contact'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
