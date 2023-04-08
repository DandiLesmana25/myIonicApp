import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http : HttpClient   //daftarkan http client
  ) { }

  
  // funtion for get user data
  public GetDataUser(){
    //panggil http
    return this.http.get<any>( environment.ApiURL + '/api/users?page=2', {} );
  }

}
