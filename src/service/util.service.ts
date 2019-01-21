import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  objToArray(obj,keyStr,valStr){
    var result = Object.keys(obj).map(function(key) {
      var temp = {};
      temp[keyStr] = key;
      temp[valStr] = obj[key];
      return temp;
    });
    return result;
  }
}
