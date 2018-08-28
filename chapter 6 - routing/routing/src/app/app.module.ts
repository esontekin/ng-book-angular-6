import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { ProtectedComponent } from './components/protected/protected.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },

  // authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ LoggedInGuard]
  },

  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [
    AuthService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
