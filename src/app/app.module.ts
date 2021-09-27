import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UlibraryComponent } from './user/ulibrary/ulibrary.component';
import { UaccountComponent } from './user/uaccount/uaccount.component';
import { UborrowComponent } from './user/uborrow/uborrow.component';
import { UbookComponent } from './user/ubook/ubook.component';
import { UsearchComponent } from './user/usearch/usearch.component';
import { SuuserComponent } from './super-user/suuser/suuser.component';
import { SuaccountComponent } from './super-user/suaccount/suaccount.component';
import { SuborrowComponent } from './super-user/suborrow/suborrow.component';
import { SutaskComponent } from './super-user/sutask/sutask.component';
import { SucategoryComponent } from './super-user/sucategory/sucategory.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { HomeComponent } from './layout/home/home.component';
import {MateriaModule} from './materia/materia.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UlibraryComponent,
    UaccountComponent,
    UborrowComponent,
    UbookComponent,
    UsearchComponent,
    SuuserComponent,
    SuaccountComponent,
    SuborrowComponent,
    SutaskComponent,
    SucategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MateriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
