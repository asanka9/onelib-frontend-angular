import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { Library } from 'src/app/model/Library';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-ulibrary',
  templateUrl: './ulibrary.component.html',
  styleUrls: ['./ulibrary.component.scss']
})
export class UlibraryComponent implements OnInit {

  showAddLibraries: boolean = false;
  userId : String | undefined;
  userPassword : String | undefined;
  showFirstUser: boolean = false;
  listOfLibraries! : any ;
  userModel : User | undefined;
  deleteUserModel : User | undefined;
  addedUserModel : User | undefined;

  constructor(private service:UserService,private fb:FormBuilder,private dialog:MatDialog) {

   }





   myForm = this.fb.group(
     {
       id : [''],
       password : ['']
     }
   );


  ngOnInit(): void {
    //this.userModel = NavComponent.model;
    let reponse = this.service.returnUserDetails(HeaderComponent.model.id);
    reponse.subscribe(
      (data: any)=> {this.userModel = data;
        this.showFirstUser = false;
        this.showAddLibraries = false;
        if (this.userModel) {
          if (this.userModel.lid !=null) {
            console.log('ddddddddddddddddddddddddddddddddddd');
            this.showFirstUser = true;
            console.log('CCCCCCCCCCCCC    :: '+this.userModel.lid);
            let resp=this.service.getListOfLibraries(this.userModel.lid);
            resp.subscribe((data: any)=>{
              this.listOfLibraries = data;
            });
          }
        }

      }
    );

  }


  addLibrary(form: { value: { id: any; password: any; }; }){
    /*
    console.log(this.userModel);
    let resp =this.service.addLibrary(form.value.id,form.value.password,this.userModel);
    resp.subscribe(
      (data)=>{
        this.listOfLibraries = data;
        this.showFirstUser = false;
        if (this.userModel.lid==null) {
          this.userModel.lid = form.value.id.split(" ",1)+"";
          var arr = form.value.id.split(" ",2);
          console.log(arr[1]);
          this.userModel.nic = arr[1]+" ";
        } else {
          this.userModel.lid = this.userModel.lid+ " "+ form.value.id.split(" ",1);
          var arr = form.value.id.split(" ",2);
          console.log(arr[1]);
          this.userModel.nic = this.userModel.nic+ " "+arr[1];
        }
      },
      (error)=>{

      }
    );*/

    if (this.userModel) {
      let resp = this.service.returnUserDetails(this.userModel.id);
      resp.subscribe(
        (user: any)=>{
          console.log(user);
          this.addedUserModel = user;
          let resp =this.service.addLibrary(form.value.id,form.value.password,this.addedUserModel);
          resp.subscribe(
            (data: any)=>{
              this.listOfLibraries = data;
  
            }
          );
        }
      );
    }

  }


  deleteLibrary(item: any){
    if (this.userModel) {
      let resp = this.service.returnUserDetails(this.userModel.id);
      resp.subscribe(
        (user: any)=>{
          console.log(user);
          this.deleteUserModel = user;
          if (this.deleteUserModel) {
            let response = this.service.deleteLibrary(this.deleteUserModel.id,item,this.deleteUserModel.lid,this.deleteUserModel.nic);
            response.subscribe(
              (data: any)=>{
                this.listOfLibraries = data;
              }
            );
          }
  

        }
      );
    }

  }

  goLocationGoogleMap(){
    /*
    const dialogCofiguration = new MatDialogConfig();
    dialogCofiguration.disableClose = false;
    dialogCofiguration.autoFocus = true;
    dialogCofiguration.width = "60%";
    this.dialog.open(ShowLocationComponent,dialogCofiguration);
    */
  }


}
