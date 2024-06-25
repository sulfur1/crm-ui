import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from "@angular/core";

import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NotFoundComponent} from "./not_found/not-found.component";

export const appRoutes: Routes =[
    { path: "", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "**", component: NotFoundComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
