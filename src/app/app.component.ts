import { Component, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UtilService } from 'src/service/util.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  countryArr = [];
  currentCountryCode = "INR";
  countryJson = { 
                  "RUB": { "country": "Russia","currency":"Russian ruble"},
                  "RON": { "country": "Romania","currency":"Romanian leu"},
                  "BGN": { "country": "Bulgaria","currency":"Bulgarian lev"},
                  "EUR": { "country": "Germany","currency":"Euro"},
                  "TRY": { "country": "Turkey","currency":"Turkish lira"},
                  "AUD": { "country": "Australia","currency":"Australian dollar"},
                  "MXN": { "country": "Mexico","currency":"Mexican peso"},
                  "USD": { "country": "United States of America", "currency": "US Dollar" }, 
                  "NOK": { "country": "Norway", "currency": "Norwegian Krone" }, 
                  "BRL": { "country": "Brazil", "currency": "Brazil Real" }, 
                  "CAD": { "country": "Canada", "currency": "Canadian Dollar" }, 
                  "CNY": { "country": "China", "currency": "Yuan Renminbi" }, 
                  "HKD": { "country": "Hong Kong", "currency": "Hong Kong Dollar" }, 
                  "NZD": { "country": "New Zealand", "currency": "New Zealand Dollar" }, 
                  "HRK": { "country": "Croatia", "currency": "Croatian Kuna" }, 
                  "CZK": { "country": "Czech Republic", "currency": "Czech Koruna" }, 
                  "DKK": { "country": "Greenland", "currency": "Danish Krone" }, 
                  "HUF": { "country": "Hungary", "currency": "Forint" }, 
                  "ISK": { "country": "Iceland", "currency": "Iceland Krona" }, 
                  "INR": { "country": "India", "currency": "Indian Rupee" }, 
                  "IDR": { "country": "Indonesia", "currency": "Indonesian Rupiah" }, 
                  "ILS": { "country": "Israel", "currency": "New Israeli Sheqel" }, 
                  "JPY": { "country": "Japan", "currency": "Yen" }, 
                  "KRW": { "country": "South Korea", "currency": "South Korean Won" }, 
                  "CHF": { "country": "Switzerland", "currency": "Swiss Franc" }, 
                  "MYR": { "country": "Malaysia", "currency": "Malaysian Ringgit" }, 
                  "PHP": { "country": "Philippines", "currency": "Philippine Peso" }, 
                  "PLN": { "country": "Poland", "currency": "Poland Zloty" }, 
                  "SGD": { "country": "Singapore", "currency": "Singapore Dollar" }, 
                  "ZAR": { "country": "South Africa", "currency": "South African Rand" }, 
                  "SEK": { "country": "Sweden", "currency": "Swedish Krona" }, 
                  "THB": { "country": "Thailand", "currency": "Thai Baht" }, 
                  "GBP": { "country": "United Kingdom", "currency": "Pound Sterling" } 
                };
  displayedColumns = ["flag","code","name","rate"];
  
  constructor(private appService: AppService,private util : UtilService) {
    this.countryArr = Object.keys(this.countryJson);
    this.loadLatest();
  }
  latestRate = [];

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  loadLatest() {
    var latest = this.appService.loadLatest(this.currentCountryCode).subscribe(
      (data: { status: string, response: any }) => {
        if (data) {
          let rates = data["rates"];
          let newRate = {};
          newRate[this.currentCountryCode] = rates[this.currentCountryCode];
          delete rates[this.currentCountryCode];
          let keys = Object.keys(rates);
          for(let k of keys){
            newRate[k] = rates[k];
          }
          this.latestRate = this.util.objToArray(newRate,"code","rate");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCurrencyName(code){
    let currency = "-";
    if(this.countryJson[code])
      currency = this.countryJson[code].currency;
    return currency;
  }

  getFlagPath(name){
    return "../assets/flags/"+name+".png";
  }

}
