import { Component, OnInit } from '@angular/core';
import { SuperUserService } from 'src/app/service/super-user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-suborrow',
  templateUrl: './suborrow.component.html',
  styleUrls: ['./suborrow.component.scss']
})
export class SuborrowComponent implements OnInit {


  constructor(private service:SuperUserService) { }
  borrowedBookList:any;
  showModal=false;

  ngOnInit(): void {
    
    let resp = this.service.returnBorrowedBooks(HeaderComponent.model.lid);
    resp.subscribe(
      (data)=>this.borrowedBookList=data
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
