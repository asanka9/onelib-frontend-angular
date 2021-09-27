import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { Category } from 'src/app/model/Category';
import { Library } from 'src/app/model/Library';
import { User } from 'src/app/model/User';
import { SuperUserService } from 'src/app/service/super-user.service';
import { UserService } from 'src/app/service/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';



@Component({
  selector: 'app-ubook',
  templateUrl: './ubook.component.html',
  styleUrls: ['./ubook.component.scss']
})
export class UbookComponent implements OnInit {


  showSearch: boolean = false;

  categoryModel!: Category;
  createdCategoryModel!: Category;

  role : String | undefined;
  uModel : User | undefined;
  showEditable: boolean = false;
  clickOnCategory: boolean = false;
  clickOnSearch: boolean = false;
  showBackBuuton: boolean = false;
  clickOnUpdate: boolean = false;


  showModal: boolean = false;
  showCategoryModal: boolean = false;

  bookModel!: Book;
  searchBookModel!: Book;

  bookName : String | undefined;
  authorName : String | undefined;

  errorWithCreateCategory: boolean = false;
  errorWithCreateBook: boolean = false;
  successWithBookCreate: boolean = false;
  createdBookModel = new Book("","","","","","","","","");
  currentCategoryName : String | undefined;
  successBookName : String | undefined;
  errorBookName : String | undefined;

  //external user checking
  //external user checking
  isExternalUser: boolean = false;
  externalSelectedLib : any;
  listOfLibraries!: Library;
  externalUserModel : any;
  numbers:any;

  checkNewExternalUser: boolean = false;


  constructor(private router:Router,private route:ActivatedRoute,private service:SuperUserService,private uservice:UserService) {

  }

  selectLibrary(){


    let resp1=this.service.returnAllCategories(this.externalUserModel.lid.split(" ")[this.externalSelectedLib]);
    this.externalSelectedLib = this.externalUserModel.lid.split(" ")[this.externalSelectedLib]
    console.log("$$$$$$$$$$$$$$   "+this.externalUserModel.lid.split(" ")[this.externalSelectedLib]+"  %%%%%%%%%%%")
    resp1.subscribe(
      (data: any)=>{
        this.categoryModel = data;

      }
    );


  }


  ngOnInit(): void {

    this.externalSelectedLib = 0;

    this.numbers = [12,434,34,656,5656,6,565,65,6,56,56];

    this.errorWithCreateCategory = false;
    this.clickOnCategory = false;
    this.clickOnSearch = false;
    this.showBackBuuton = false;
    this.showEditable = false;
    this.clickOnUpdate = false;
    this.showModal = false;
    this.errorWithCreateBook = false;
    this.successWithBookCreate = false;
    this.showCategoryModal = false;
    this.createdCategoryModel = new Category("","","",0,"");
    this.checkNewExternalUser = false;





    this.uModel=HeaderComponent.model;
    this.externalSelectedLib = this.uModel.lid.split(" ")[0];
    this.role = this.uModel.role;
    if (this.role=='SUPERUSER') {
      this.showEditable=true;
      this.isExternalUser = false;
      let resp=this.service.returnAllCategories(this.uModel.lid);
      resp.subscribe(
        (data: any)=>{
          this.categoryModel = data;

        }
      );
    } else {
      this.showEditable=false;
      this.isExternalUser = true;
      let red = this.uservice.returnUserDetails(HeaderComponent.model.id);
      red.subscribe(
        (data: any)=>{
          this.externalUserModel = data;

          if (this.externalUserModel.lid==null) {
            this.checkNewExternalUser = true;
          }
          let resp = this.uservice.getListOfLibraries(this.externalUserModel.lid);
          resp.subscribe(
            (data: any)=>{
              this.listOfLibraries=data;
            }
          );

          if (this.externalUserModel.lid!=null) {
            let resp1=this.service.returnAllCategories(this.externalUserModel.lid.split(" ")[1]);
            resp1.subscribe(
              (data: any)=>{
                this.categoryModel = data;
                console.log('Hellooo  '+this.externalUserModel.lid.split+"Hiiiii");
                console.log(data);
                console.log('Heeeeeeeeeeeee');
              }
            );
          }
        }
      );

    }

    this.showSearch = true;




  }

  ClickOnCategory(a: String | undefined){
    this.showSearch = false;
    this.clickOnSearch = false;
    this.clickOnCategory=true;
    this.showBackBuuton = true;
    this.currentCategoryName=a;
    var resp;
    if (this.uModel) {
      if (this.uModel.role=='SUPERUSER') {
        if (a) {
          resp=this.service.returnBooksWithCategory(a,this.uModel.lid);
          resp.subscribe(
            (data: any)=>{
              console.log(data);
              this.bookModel = data;
            }
          );
        }
      } else {
        console.log("$$$$$$$$$$$$$$     "+this.externalSelectedLib +"  $$$$$$$$$$$$$$$$$$$$")
        resp=this.service.returnBooksWithCategory(a,this.externalSelectedLib);
        resp.subscribe(
          (data: any)=>{
            console.log(data);
            this.bookModel = data;
          }
        );
      }

    }



  }

clickOnSearchButton(){
    ///this.router.navigate(['search'],{relativeTo:this.route});
    this.clickOnSearch = true;
    this.clickOnCategory=false;
    this.showBackBuuton = true;
    if (this.bookName=="") {
      let resp;
      if (this.uModel) {
        if (this.uModel.role=='SUPERUSER') {
          resp=this.service.searchBooks(this.uModel.lid,'undefined',this.authorName);
        } else {
          resp=this.service.searchBooks(this.externalSelectedLib,'undefined',this.authorName);
        }
        resp.subscribe(
          (data: any)=>{
            this.searchBookModel = data;
          }
        );
      }

    }else if (this.authorName=="") {
      let resp;
      if (this.uModel) {
        if (this.uModel.role=='SUPERUSER') {
          resp=this.service.searchBooks(this.uModel.lid,this.bookName,'undefined');
        } else {
          resp=this.service.searchBooks(this.externalSelectedLib,this.bookName,'undefined');
        }
        resp.subscribe(
          (data: any)=>{
            this.searchBookModel = data;
          }
        );
      }

    }else if(!(this.authorName=="" && this.authorName=="")){
      let resp;
      if (this.uModel) {
        if (this.uModel.role=='SUPERUSER') {
          resp =this.service.searchBooks(this.uModel.lid,this.bookName,this.authorName);
        } else {
          resp =this.service.searchBooks(this.externalSelectedLib,this.bookName,this.authorName);
        }
        resp.subscribe(
          (data: any)=>{
            this.searchBookModel = data;
          }
        );
      }

    }




  }

goMainMenu(){
    this.clickOnSearch = false;
    this.clickOnCategory=false;
    this.showBackBuuton = false;
    console.log('Hellloooo');
  }

clickOnUpdateButton(){
    this.clickOnUpdate = ! this.clickOnUpdate;
    console.log(this.clickOnUpdate);
  }

clickOnSaveButton(model: any){
    let resp=this.service.updateBook(this.currentCategoryName,model);
    resp.subscribe(
     (data: any)=>this.bookModel=data,
     (error: any)=>{console.log('sdsdsd');
      //add a alert box also for this one
    }
    );
  }

clickOnDeleteButton(model: any){
    let reponse = this.service.deleteBook(this.currentCategoryName,model);
    reponse.subscribe(
      (data: any)=>this.bookModel=data
    )

  }

createBook(){
  if (this.uModel) {
    this.createdBookModel.libraryid= this.uModel.lid;
    if (this.currentCategoryName) {
      this.createdBookModel.categoryid=this.currentCategoryName;
      let reponse=this.service.createBook(this.currentCategoryName,this.createdBookModel);
      reponse.subscribe(
        (data: any)=>{
          this.successWithBookCreate=true;
          this.errorWithCreateBook=false;
          this.bookModel=data;
          this.successBookName=data.name;
          this.showModal=false
        },
        (error: any)=>{
          this.errorWithCreateBook=true;
          this.successWithBookCreate=false;
        }
      );
    }
    

  }

  }

  createNewCategory(){
    this.showCategoryModal = true;
    this.createdCategoryModel.libraryid = HeaderComponent.model.lid;
    let response = this.service.createCategory(this.createdCategoryModel);
    response.subscribe(
      (data: any)=>{
        this.categoryModel = data;
        this.showCategoryModal=false
        this.errorWithCreateCategory = false;
      },
      (error: any)=>{
        this.errorWithCreateCategory = true;
      }
      );
  }



}
