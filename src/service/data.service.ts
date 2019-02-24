import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {

  }

  get(url, params) {
    return this.httpClient.get(url + params);
  }

  post(url, resource) {
    var options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }
    return this.httpClient.post(url, resource, options);
  }

  postWithOptions(url, resource, options) {
    return this.httpClient.post(url, resource, options);
  }

  postAsJSON(url, resource) {
    var options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }
    return this.httpClient.post(url, JSON.stringify(resource), options);
  }


  postAsUrlEncode(url, resource) {
    var options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }
    return this.httpClient.post(url, resource, options);
  }

  postAsFormData(url, resource) {
    var options = {
      //headers: new HttpHeaders().set('Content-Type', 'multipart/form-data'),
    }

    return this.httpClient.post(url, resource, options);
  }

}
