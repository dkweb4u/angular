import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './container/employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';

import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';



import {FormsModule} from '@angular/forms';

import { ProductsModule } from './products.module';
import { routeConfigs } from './services/routerconfig-services';
import { MychildComponent } from './products/mychild/mychild.component';


function initfactiry(initservice : InitService){
  return ()=> initservice.init()
}



@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    TopbarComponent,
    ContainerComponent,
    EmployeeComponent,
    ProductsComponent,
    PagesComponent,

    AboutComponent,
    ServicesComponent,
 
    BlogComponent,
    ContactComponent,
    AppNavComponent,
    NotfoundComponent,
    MychildComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ProductsModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide: routeConfigs,
    useValue: {title: 'Home'}
  },
  {
     provide: APP_INITIALIZER,
     useFactory: initfactiry,
     deps: [InitService],
     multi: true  
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
