import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryRegisterService {

  
  constructor(private http:HttpClient) {

  }

  private API_URL = "http://localhost:8080";


  public doRegister(model: any,library: string){
    return this.http.post(this.API_URL+"/superUser/addLibraryAndUser/"+library,model);
  }

  public numOfUsers(){

    return this.http.get(this.API_URL+"/home/numOfUsers");
  }

  public numOfLibraries(){
    return this.http.get(this.API_URL+"/home/numOfLibraries");
  }

  // public  loginUser(email: string,password: String){
  //   return this.http.get("http://localhost:8080/home/login/"+email+"/"+password);
  // }


  public loginUser(email:string,password:String){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.http.get(this.API_URL+"/login",{headers,responseType: 'text' as 'json'})
  }

  public getLibraryName(lid: String){
    return this.http.get(this.API_URL+"/user/getLibraryName/"+lid,{responseType:'text' as 'json'});
  }

  public createExternalUser(model: any): Observable<any>{
    return this.http.post(this.API_URL+"/home/externalUserCreate",model);
  }








}
