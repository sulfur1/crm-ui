import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from "@angular/core";

import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {NotFoundComponent} from "./pages/not_found/not-found.component";

export const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "**", component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
