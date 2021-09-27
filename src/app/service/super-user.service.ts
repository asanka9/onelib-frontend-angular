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


  public createSuperUser(libraryId: any,model: any): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createSuperUser/"+libraryId,model);
  }

  public createUser(libraryId: any,model: any): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createUser/"+libraryId,model);
  }

  public updateUsers(model: any): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/updateUsers",model);
  }

  public returnAllBooks(libraryId: any){
    return this.http.get("http://localhost:8080/superUser/returnAllBooks/"+libraryId);
  }

  public searchBooks(libraryId: any,bookName: any,authorName: any): Observable<any>{
    return this.http.get("http://localhost:8080/superUser/searchBook/"+libraryId+"/"+bookName+"/"+authorName);
  }

  public returnBooksWithCategory(categoryName: any,libraryId: any):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/searchCategoryBook/"+categoryName+"/"+libraryId);
  }

  public createBook(categoryId: any,model: any):Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createBook/"+categoryId,model);
  }

  public updateBook(catid: any,model: any):Observable<any>{
    return this.http.put("http://localhost:8080/superUser/updateBook/"+catid,model);
  }

  public getUserDetails(id: any):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/userId/"+id);
  }

  public deleteBook(catId: any,model: any):Observable<any>{
    return this.http.post("http://localhost:8080/superUser/deleteBook/"+catId,model);
  }

  public updateLibrary(model: any): Observable<any>{
    return this.http.put("http://localhost:8080/superUser/updateLibrary",model);
  }

  public returnAllCategories(libraryid: any): Observable<any>{
    return this.http.get("http://localhost:8080/superUser/getCategories/"+libraryid);
  }

  public createCategory(model: any): Observable<any>{
    return this.http.post("http://localhost:8080/superUser/createCategory",model);
  }

  public updateCategory(categoryId: any,model: any){
    return this.http.put("http://localhost:8080/superUser/updateCategory/"+categoryId,model);
  }

  public returnBorrowedBooks(lib: any){
    return this.http.get("http://localhost:8080/superUser/returnBorrowedBooks/"+lib);
  }

  //getLLibraryDetails
  public getLLibraryDetails(id: any):Observable<any>{
    return this.http.get("http://localhost:8080/superUser/getLLibraryDetails/"+id);
  }

 public borrowedBooks(lid: any,date: any,uid: any,bname: any):Observable<any>{
   return this.http.get("http://localhost:8080/superUser/borrowBook/"+lid+"/"+date+"/"+uid+"/"+bname);
 }

 public removeBookFromBorowedBook(lid: any,uid: any,name: any):Observable<any>{
   return this.http.delete("http://localhost:8080/superUser/removeFromBook/"+lid+"/"+uid+"/"+name);
 }














}
