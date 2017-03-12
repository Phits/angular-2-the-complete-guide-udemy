import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";

const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);