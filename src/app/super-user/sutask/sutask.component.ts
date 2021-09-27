import { Component, OnInit } from '@angular/core';
import { SuperUserService } from 'src/app/service/super-user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-sutask',
  templateUrl: './sutask.component.html',
  styleUrls: ['./sutask.component.scss']
})
export class SutaskComponent implements OnInit {

  userIdBorrowed : String | undefined;
  errorBorrowed : boolean | undefined;


  constructor(private service:SuperUserService) { }

  ngOnInit(): void {
    this.errorBorrowed = false;
  }

  //ook/"+lid+"/"+date+"/"+uid+"/"+bname);
  borowBookToUser(form: { value: { date: any; uid: any; bname: any; }; }){
    const lid = HeaderComponent.model.lid;
    let response = this.service.borrowedBooks(lid,form.value.date,form.value.uid,form.value.bname);
    response.subscribe(
      (data: any)=>{
        console.log("SUCCESSSSSSSS !!!!!!!!!!");
        this.errorBorrowed = false;
      },
      (error: any)=>{
        this.errorBorrowed = true;
      }
    );
  }

  returnBookFromUser(form: { value: { uid: any; bname: any; }; }){
    const lid = HeaderComponent.model.lid;
    let resp = this.service.removeBookFromBorowedBook(lid,form.value.uid,form.value.bname);
    resp.subscribe(
      (data: any)=>{

      },
      (erroe: any)=>{

      }
    );
  }

}
