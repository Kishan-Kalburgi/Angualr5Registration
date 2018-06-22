import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addUser(item){
    return this.http.post("https://registration-form-demo1.herokuapp.com/saveUser", item)
  }

  getUserList(id){
    return this.http.get("https://registration-form-demo1.herokuapp.com/getUserList/"+ id)
  }


}
