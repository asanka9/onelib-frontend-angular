import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { SuperUserService } from 'src/app/service/super-user.service';
import { UserService } from 'src/app/service/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-uaccount',
  templateUrl: './uaccount.component.html',
  styleUrls: ['./uaccount.component.scss']
})
export class UaccountComponent implements OnInit {

  uModel : User | undefined;
  save : boolean | undefined;
  pass1 : string | undefined;
  pass2 : string | undefined;
  pass3 : string | undefined;
  pass4 : string | undefined;
  errorInUserUpdate : boolean | undefined;
  userIds : String | undefined;
  userNics : string | undefined;
  static FUID : string;

  constructor(private service:SuperUserService, private userService:UserService) { }

  ngOnInit(): void {
    //console.log(UserAccountComponent.FUID);
    this.save = false;
    this.uModel= HeaderComponent.model;
    this.errorInUserUpdate = true;

    let response = this.userService.returnUserDetails(HeaderComponent.model.id);
    response.subscribe(
      (data)=>{
        this.userIds = data.lid;
        this.userNics = data.nic;
      }
    );
  }

  updateUserDetail(){
    if ((this.pass2+' '+this.pass3+' '+this.pass4=='undefined undefined undefined') && this.pass1 !=undefined) {

        if (this.uModel) {
          this.uModel.password = this.pass1;
        }
        


    }else{
      if (this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4 !='undefined undefined undefined undefined') {
        if (this.uModel) {
          this.uModel.password = this.pass1+' '+this.pass2+' '+this.pass3+' '+this.pass4;
        }
        
      }

    }

      if (this.uModel) {
        if (this.userIds) {
          this.uModel.lid = this.userIds;
        }
        if (this.userNics) {
          this.uModel.nic = this.userNics;
        }
        
        
      }

      let response= this.service.updateUsers(this.uModel);
      response.subscribe(
        (data)=>{
          this.uModel=data;
          if (this.uModel) {
            if (this.uModel.id != HeaderComponent.model.id) {
              UaccountComponent.FUID = 'was '+ this.uModel.id;
            }
            this.errorInUserUpdate=false;
          }

        },
        (error)=>this.errorInUserUpdate=true

      );
    }

}
