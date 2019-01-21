import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataService } from 'src/service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AppService extends DataService{

  constructor(private http:HttpClient) { 
    super(http);
    
  }

  loadLatest(currentCountryCode) {
    var params = "?base="+currentCountryCode;
    return this.get("https://api.exchangeratesapi.io/latest",params);
  }
}
