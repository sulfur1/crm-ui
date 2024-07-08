import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from "@angular/core";

import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {NotFoundComponent} from "./pages/not_found/not-found.component";
import {CustomersComponent} from "./pages/customers/customers.component";
import {LayoutComponent} from "./common-ui/layout/layout.component";
import {SearchPageComponent} from "./page/search-page/search-page.component";
import {ProfilePageComponent} from "./page/profile-page/profile-page.component";

export const appRoutes: Routes =[
  {
    path: '', component: LayoutComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: "customers", component: CustomersComponent},
      {path: "search", component: SearchPageComponent},
      {path: "profile/me", component: ProfilePageComponent},
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "**", component: NotFoundComponent }
];
