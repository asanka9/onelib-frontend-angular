import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { LibraryRegisterService } from 'src/app/service/library-register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //external users create
  showexCreate : boolean | undefined;
  showExError: boolean = false;


  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  model = new User("","","","","","","","","","");
  exUserModel! : User ;
  acceptTerms: true = true;
  submitted = false;
  selected = "Public";
  isSelected ="true";
  libraryName ="";
  numOfUsers :any;
  numOfLibraries :any;
  user_email : string | undefined;
  user_password : String | undefined;
  login_user : any;
  confirm_password : String | undefined;

  static mod :any;
  no: boolean = false;

  constructor(private service:LibraryRegisterService,private router:Router) { }

  ngOnInit(): void {

    this.showexCreate = true;
    this.no = false;
    this.exUserModel = new User("","","","","","","","","","");

    let resp=this.service.numOfUsers();
    resp.subscribe((data)=>this.numOfUsers=data);

    let resp1 = this.service.numOfLibraries();
    resp1.subscribe((data)=>this.numOfLibraries=data);
  }

  onSubmit(){
    let resp=this.service.doRegister(this.model,this.libraryName);
    resp.subscribe((data)=>this.addToELib(data));
  }

  private addToELib(mode: any){
    this.submitted=true;
    this.model=mode;
  }

  loginVerification(){
    if (this.user_email) {
      var password = this.user_password;
      if (password) {
        let resp =  this.service.loginUser(this.user_email,password);
        console.log('user name :: '+this.user_email);
        console.log('password  :'+this.user_password)
        resp.subscribe(
          (data)=>{this.name(data);
            console.log('SUSSSSSSSSSSSSSSSSSSSUUUUUUUUUU');
          },
          (error)=>{
            this.no = true;
          }
          );
      }

    }

  }


  createExternalUser(){
    console.log(this.exUserModel);
    let resp=this.service.createExternalUser(this.exUserModel);
    resp.subscribe(
      (data)=>{
        console.log('success create external user');
        this.showexCreate = false;    
      },
      (error)=>{

      }
    );
  }


  private name(model: Object | null) {
      if(!(model==null)){
        HomeComponent.mod= model;
        this.router.navigate(['menu'],{
          queryParams:model,
        });
      }
  }



}
