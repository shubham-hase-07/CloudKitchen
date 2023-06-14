import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import {HttpClientModule} from '@angular/common/http'
import {CurrencyPipe} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import { OderformComponent } from './pages/oderform/oderform.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    OderformComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
