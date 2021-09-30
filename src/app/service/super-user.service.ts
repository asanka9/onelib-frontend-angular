import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperUserService {

  headers : any;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('abc' + ':' + 'aaa') });

   }

   private API_URL = "http://localhost:8080";

  public createSuperUser(libraryId: any,model: any): Observable<any>{
    return this.http.post(this.API_URL + "/superUser/createSuperUser/"+libraryId,model);
  }

  public createUser(libraryId: any,model: any): Observable<any>{
    return this.http.post(this.API_URL + "/superUser/createUser/"+libraryId,model);
  }

  public updateUsers(model: any): Observable<any>{
    return this.http.post(this.API_URL + "/superUser/updateUsers",model);
  }

  public returnAllBooks(libraryId: any){
    return this.http.get(this.API_URL + "/superUser/returnAllBooks/"+libraryId);
  }

  public searchBooks(libraryId: any,bookName: any,authorName: any): Observable<any>{
    return this.http.get(this.API_URL + "/superUser/searchBook/"+libraryId+"/"+bookName+"/"+authorName);
  }

  public returnBooksWithCategory(categoryName: any,libraryId: any):Observable<any>{
    return this.http.get(this.API_URL + "/superUser/searchCategoryBook/"+categoryName+"/"+libraryId);
  }

  public createBook(categoryId: any,model: any):Observable<any>{
    return this.http.post(this.API_URL + "/superUser/createBook/"+categoryId,model);
  }

  public updateBook(catid: any,model: any):Observable<any>{
    return this.http.put(this.API_URL + "/superUser/updateBook/"+catid,model);
  }

  public getUserDetails(id: any):Observable<any>{
    return this.http.get(this.API_URL + "/superUser/userId/"+id);
  }

  public deleteBook(catId: any,model: any):Observable<any>{
    return this.http.post(this.API_URL + "/superUser/deleteBook/"+catId,model);
  }

  public updateLibrary(model: any): Observable<any>{
    return this.http.put(this.API_URL + "/superUser/updateLibrary",model);
  }

  public returnAllCategories(libraryid: any): Observable<any>{
    return this.http.get(this.API_URL + "/superUser/getCategories/"+libraryid);
  }

  public createCategory(model: any): Observable<any>{
    return this.http.post(this.API_URL + "/superUser/createCategory",model);
  }

  public updateCategory(categoryId: any,model: any){
    return this.http.put(this.API_URL + "/superUser/updateCategory/"+categoryId,model);
  }

  public returnBorrowedBooks(lib: any){
    return this.http.get(this.API_URL + "/superUser/returnBorrowedBooks/"+lib);
  }

  //getLLibraryDetails
  public getLLibraryDetails(id: any):Observable<any>{
    return this.http.get(this.API_URL + "/superUser/getLLibraryDetails/"+id);
  }

 public borrowedBooks(lid: any,date: any,uid: any,bname: any):Observable<any>{
   return this.http.get(this.API_URL + "/superUser/borrowBook/"+lid+"/"+date+"/"+uid+"/"+bname);
 }

 public removeBookFromBorowedBook(lid: any,uid: any,name: any):Observable<any>{
   return this.http.delete(this.API_URL + "/superUser/removeFromBook/"+lid+"/"+uid+"/"+name);
 }














}
