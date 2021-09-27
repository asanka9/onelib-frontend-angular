import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SuaccountComponent } from './super-user/suaccount/suaccount.component';
import { SuborrowComponent } from './super-user/suborrow/suborrow.component';
import { SucategoryComponent } from './super-user/sucategory/sucategory.component';
import { SutaskComponent } from './super-user/sutask/sutask.component';
import { SuuserComponent } from './super-user/suuser/suuser.component';
import { UaccountComponent } from './user/uaccount/uaccount.component';
import { UbookComponent } from './user/ubook/ubook.component';
import { UborrowComponent } from './user/uborrow/uborrow.component';
import { UlibraryComponent } from './user/ulibrary/ulibrary.component';
import { UsearchComponent } from './user/usearch/usearch.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'menu',
    children: [
      //admin


      //user
      {
        path: 'books',
        children: [
          {
            path: 'category/:name',
            children: [
              { path: 'search', component: UsearchComponent }
            ],
            component: SucategoryComponent
          },
          { path: 'search', component: UsearchComponent }
        ],
        component: UbookComponent
      },
      { path: 'myBooks', component: UborrowComponent },
      { path: 'userAccount', component: UaccountComponent },

      //superuser
      { path: 'borrowedBooks', component: SuborrowComponent },
      { path: 'bookTask', component: SutaskComponent },
      { path: 'settings', component: SuaccountComponent },
      { path: 'createUsers', component: SuuserComponent },

      //external users
      { path: 'libraries', component: UlibraryComponent },
      { path: 'myBooks', component: UborrowComponent },
      { path: 'myAccount', component: UaccountComponent }
    ],

    component: HeaderComponent
  },



];










@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
