import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewComponent } from './components/view/view.component';
import { NavComponent } from './components/shared/nav.component';
import {KeysPipe} from './pipes/getkeyvalue';

import {GlobalService} from './services/global.service';
import { FormService} from'./services/form.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,routing,HttpModule, ReactiveFormsModule],
  declarations: [ AppComponent,LoginComponent, RegisterComponent, ViewComponent, NavComponent,KeysPipe],
  bootstrap:    [ AppComponent ],
  providers: [GlobalService, FormService]
})
export class AppModule { }
