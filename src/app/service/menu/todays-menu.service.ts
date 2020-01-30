import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../model/menu/menu';

@Injectable({
  providedIn: 'root'
})
export class TodaysMenuService {

  // apiURL="http://localhost:8080/menu/today";
  constructor(private http:HttpClient) { }
  
  getTodaysMenu(){
    // return this.http.get<Menu>(this.apiURL).toPromise();
  }
}
