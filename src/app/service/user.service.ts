import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = "http://localhost:8080";

  
  headers : any;
  constructor(private http:HttpClient) {
     this.headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('abc' + ':' + 'aaa') });

   }

  public addLibrary(userId: any,userPassword: any,model: any): Observable<any>{
    return this.http.post(this.API_URL + "/user/addLibraries/" + userId + "/" + userPassword, model);
  }

  public getListOfLibraries(libs: any): Observable<any>{
    return this.http.get(this.API_URL + "/user/returnLibs/"+libs);
  }

  public returnAllBooks(model: any): Observable<any>{
    return this.http.post(this.API_URL + "/user/returnOrderBooks",model);
  }

  //{userID}/{deleteLid}/{lids}/{uids}
  public deleteLibrary(userId: any,deletedId: any,lids: any,uids: any) :Observable<any>{
    return this.http.delete(this.API_URL + "/mobile/deleteLibrary/"+userId+"/"+deletedId+"/"+lids+"/"+uids);
  }

  public returnUserDetails(userId: any):Observable<any>{
    return this.http.get(this.API_URL + "/user/getUser/"+userId);
  }





}
