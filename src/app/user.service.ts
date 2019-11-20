import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  repos_url = localStorage.getItem('userurl')
  baseUrl = "https://api.github.com/users"

  constructor(private http:HttpClient) { }
  getUserData(){
   return  this.http.get(this.baseUrl)
  }
  getUserRepos(){
   return this.http.get(this.repos_url)
  }
}
