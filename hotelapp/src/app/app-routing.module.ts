import { NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { BookingComponent } from './booking/booking.component';


import { AddproductComponent } from './products/addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guard/login.guard';

const routes: Routes = [
  {path: 'home', component: ProductsComponent, canActivate:[loginGuard],

  // children: [{path: ':product_id', component: AboutComponent}]
},

  {path: 'about', component: AboutComponent , },
  {path: 'services', component: ServicesComponent,  },

  {path: 'home/:product_id', component: BookingComponent ,  },

  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'login', component: LoginComponent},

 
  {path:'', redirectTo: '/home',pathMatch: 'full' },

  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
