import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-uborrow',
  templateUrl: './uborrow.component.html',
  styleUrls: ['./uborrow.component.scss']
})
export class UborrowComponent implements OnInit {

  orderBooks : any;
  checkNewUser : boolean | undefined;

  constructor(private service:UserService) { }

  ngOnInit(): void {

    let response = this.service.returnUserDetails(HeaderComponent.model.id);
    response.subscribe(
      (data01)=>{


        if (data01.lid != null) {
          this.checkNewUser = false;
          let resp=this.service.returnAllBooks(data01);
          resp.subscribe(
            (data)=>{
              if (data==null) {
                this.checkNewUser = true;
              }
              this.orderBooks = data;
              console.log(data);
            },
            (error)=>{

            }
          );
        }

      }
    );


  }
  checkNegativeOrPositive(num:number){
    if (num<0) {
      num = -num;
      return '[ '+ num +' ]';
    } else {
      return num ;
    }
  }
}
