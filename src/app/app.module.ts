import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//manual imports
import {Routes, RouterModule} from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProductcardComponent } from './productcard/productcard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//my routes
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanactivateGuard]
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
