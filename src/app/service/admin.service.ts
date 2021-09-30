import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  constructor(private http:HttpClient) { }

  private API_URL = "http://localhost:8080";

  public getLibraies(){
    return this.http.get(this.API_URL + "/admin/getLibrary");
  }



}
