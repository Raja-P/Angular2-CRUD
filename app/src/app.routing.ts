import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewComponent } from './components/view/view.component';

const appRoutes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full'},
{ path:'register', component:RegisterComponent },
{ path:'login', component:LoginComponent },
{ path:'view', component:ViewComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
