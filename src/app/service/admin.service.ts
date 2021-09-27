import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(private http:HttpClient) { }

  public getLibraies(){
    return this.http.get("http://localhost:8080/admin/getLibrary");
  }



}
