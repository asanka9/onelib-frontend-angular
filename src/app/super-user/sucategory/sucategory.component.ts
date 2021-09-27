import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

import { Book } from 'src/app/model/Book';
import { User } from 'src/app/model/User';
import { SuperUserService } from 'src/app/service/super-user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-sucategory',
  templateUrl: './sucategory.component.html',
  styleUrls: ['./sucategory.component.scss']
})
export class SucategoryComponent implements OnInit {


  showGrid : boolean | undefined;
  categoryName : string | null | undefined;
  bookModel! : any ;
  numbers=[12,3,34,34,34];
  role : String | undefined;
  uModel : User | undefined;
  showEditable : boolean | undefined;

  constructor(private router:Router,private route:ActivatedRoute,private  service:SuperUserService) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ');
   }

  ngOnInit(): void {



    this.uModel=HeaderComponent.model;
    if (this.uModel) {
      this.role = this.uModel.role;
    }
    if (this.role=='SUPERUSER') {
      this.showEditable=true;
    } else {
      this.showEditable=false;
    }
    this.showGrid= true;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.categoryName = params.get('name');
    });


    if (this.categoryName) {
     
      if (this.uModel) {
        var lid = this.uModel.lid;
        let resp=this.service.returnBooksWithCategory(this.categoryName,lid);
        resp.subscribe(
          (data: Book )=>{
            console.log(data);
            this.bookModel = data;
          }
        );
      }


    }


  }

  /*
    //another type value we can get from QueryMap name?asanka,age?3232
  ///import { ActivatedRoute, ParamMap } from '@angular/router';
  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      let id_department = parseInt(params.get('id'));
      this.id = id_department;
    });

  }

  */

  clickOnSearchButton(){
    this.showGrid = false;
    this.router.navigate(['search'],{relativeTo:this.route});
  }

  goMainMenu(){
    this.router.navigate(['menu/books']);

  }

}
