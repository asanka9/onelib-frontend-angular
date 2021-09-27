import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { SuperUserService } from 'src/app/service/super-user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-suuser',
  templateUrl: './suuser.component.html',
  styleUrls: ['./suuser.component.scss']
})
export class SuuserComponent implements OnInit {

  model = new User("","","","","","","","","","");
  smodel = new User("","","","","","","","","","");

  searchModels =new User("","","","","","","","","","");
  uModel:User | undefined;

  clickOnSearchButtton: boolean = false;
  userFound: boolean = false;




  constructor(private service:SuperUserService) { }

  submitUser: boolean = false;
  submitAdmin: boolean = false;
  adminErrorMessage: boolean = false;
  userErrorMessage: boolean = false;

  searchUserName!: string;

  ngOnInit(): void {
    this.uModel=HeaderComponent.model;
    this.submitUser=false;
    this.submitAdmin=false;
    this.adminErrorMessage=false;
    this.userErrorMessage=false;
    this.clickOnSearchButtton = false;
    this.userFound = false;
  }

  private addToELib(mode: any){
    this.submitUser=true;
    this.userErrorMessage=false;
    this.model=mode;
  }

  loginVerification(){
    console.log(HeaderComponent.model.lid);
    let resp =  this.service.createUser(HeaderComponent.model.lid,this.model);
    resp.subscribe(
      (data: any)=>this.addToELib(data),
      (error: any) => {                              //Error callback
        this.userErrorMessage =true;
      }
      );
  }

  goUser(){
    this.submitUser=false;
  }



  private addToELib1(mode: any){
    this.submitAdmin=true;
    this.adminErrorMessage=false;
    this.smodel=mode;
  }

  loginAdminVerification(){
    let resp =  this.service.createSuperUser(HeaderComponent.model.lid,this.smodel);
    resp.subscribe(
      (data: any)=>this.addToELib1(data),
      (error: any) => {                              //Error callback
        this.adminErrorMessage =true;
      }


      );

  }

  goAdmin(){
    this.submitAdmin=false;
  }

  searchWithId(){
    this.clickOnSearchButtton = true;
    if (this.searchUserName) {
      let resp=this.service.getUserDetails(this.searchUserName);
      resp.subscribe(
        (data: any)=>{
          this.searchModels = data;
          this.userFound = true;
          console.log(data);
        },
        (error: any)=>{
          this.userFound = false;
        }
      );
    }

  }




  /*

    createUser(){
    let resp=this.service.createUser();
  }

  createSuperUser(){
    let resp=this.service.createSuperUser();
  }

  */

}
