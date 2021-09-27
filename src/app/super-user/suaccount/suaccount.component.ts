import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { Library } from 'src/app/model/Library';
import { User } from 'src/app/model/User';
import { SuperUserService } from 'src/app/service/super-user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-suaccount',
  templateUrl: './suaccount.component.html',
  styleUrls: ['./suaccount.component.scss']
})
export class SuaccountComponent implements OnInit {

  userDetailState =true;
  libraryDetailService=true;
  libraryModel! : Library ;
  userModel! : User ;
  pass1!: String;
  pass2!: String;
  pass3!: String;
  pass4!: String;
  libraryUpdate = false;
  errorInUserUpdate!: boolean;
  constructor(private service:SuperUserService,private dialog:MatDialog) {

   }

  ngOnInit(): void {
    this.errorInUserUpdate = true;
    let resp = this.service.getLLibraryDetails(HeaderComponent.model.lid);
    resp.subscribe(
      (data: any)=>{
        this.libraryModel=data;
        console.log(data)
      }
    );
    this.userModel = HeaderComponent.model;
    this.errorInUserUpdate=false;
  }


  userDetailTemplate(){
    console.log(this.userDetailState);
    this.userDetailState = !this.userDetailState;
  }


  updateUserDetail()
  {
    if (this.userModel) {
      this.userModel.password = HeaderComponent.model.password;
    }
    

    if  ((this.pass2+' '+this.pass3+' '+this.pass4)=='undefined undefined undefined' && this.pass1 !=undefined) {
      console.log("111111111111111111111");
      if (this.userModel) {
        this.userModel.password = this.pass1;
      }
  }else{
    console.log("22222222222222222222222222222222");
    if (this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4 !='undefined undefined undefined undefined') {
      if (this.userModel) {
        this.userModel.password = this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4;
      }
    }
  }

    console.log(this.userModel);

    let response= this.service.updateUsers(this.userModel);
    response.subscribe(
      (data: any)=>{
        this.userModel=data;
        this.errorInUserUpdate=true;
      },
      (error: any)=>this.errorInUserUpdate=false

    );
  }

  updateLibraryDetails(){
    let resp = this.service.updateLibrary(this.libraryModel);
    resp.subscribe(
      (data: any)=>{this.libraryModel = data;this.libraryUpdate=true;}
    );

  }

  changeLibraryState(){
    this.libraryDetailService = !this.libraryDetailService;
    this.libraryUpdate = false;
  }


  addGoogleLocation(){
    /*
    const dialogCofiguration = new MatDialogConfig();
    dialogCofiguration.disableClose = false;
    dialogCofiguration.autoFocus = true;
    dialogCofiguration.width = "60%";
    this.dialog.open(GoogleComponentComponent,dialogCofiguration);
    */
  }

}
