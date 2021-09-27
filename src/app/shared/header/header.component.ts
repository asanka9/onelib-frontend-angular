import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { User } from 'src/app/model/User';
import { LibraryRegisterService } from 'src/app/service/library-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ROLE :string | undefined;
  navItems =[false,false,false,false,false];
  navItemsUser =['',''];
  navItemsSuperUser =['bookTask','books','borrowedBooks','createUsers','settings'];
  navItemsAdminUser = ['',''];
  static model:User;
  navBrands : any;

  constructor(private route:ActivatedRoute,private  router:Router,private service01:LibraryRegisterService) {
  }

  ngOnInit(): void {
   this.ROLE= HomeComponent.mod.role;
  //this.model = new UserModel('user','Asanka Gayshan','0775684323','male','9615345322v','93/hakuruwela','RJP1','USER','123');
  HeaderComponent.model = HomeComponent.mod;
  // this.model = new UserModel('admin','Asanka Gayshan','0775684323','male','9615345322v','93/hakuruwela','RJP1','ADMIN','123');

   switch (HeaderComponent.model.role) {
     case 'SUPERUSER':
      let resp=this.service01.getLibraryName(HeaderComponent.model.lid);
      resp.subscribe(
        (data)=>this.navBrands=data
      );
      this.router.navigate(['menu/bookTask']);
       break;
    case 'external':
        this.navBrands = 'e-Lib';
        this.router.navigate(['menu/libraries']);
          break;
   }
   console.log(this.route.snapshot.queryParamMap.get('role'));
  }
  navClickItems(item:  number,link: any){

    for (let index = 0; index < this.navItems.length; index++) {
      this.navItems[index]=false;
    }
    this.navItems[item] = true;
    this.router.navigate([link],{relativeTo:this.route});

  }

}
