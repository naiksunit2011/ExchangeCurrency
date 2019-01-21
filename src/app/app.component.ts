import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryArr = [];
  currentCountryCode = "INR";
  countryJson = { "USD": { "country": "Virgin Islands (US)", "currency": "US Dollar" }, "AUD": { "country": "Tuvalu", "currency": "AUD" }, "NOK": { "country": "Svalbard and Jan Mayen", "currency": "Norwegian Krone" }, "BRL": { "country": "Brazil", "currency": "Brazil Real" }, "CAD": { "country": "Canada", "currency": "Canadian Dollar" }, "CNY": { "country": "China", "currency": "Yuan Renminbi" }, "HKD": { "country": "China (Hong Kong S.A.R.)", "currency": "Hong Kong Dollar" }, "NZD": { "country": "Tokelau", "currency": "New Zealand Dollar" }, "HRK": { "country": "Croatia", "currency": "Croatian Kuna" }, "CZK": { "country": "Czech Republic", "currency": "Czech Koruna" }, "DKK": { "country": "Greenland", "currency": "Danish Krone" }, "HUF": { "country": "Hungary", "currency": "Forint" }, "ISK": { "country": "Iceland", "currency": "Iceland Krona" }, "INR": { "country": "India", "currency": "Indian Rupee" }, "IDR": { "country": "Indonesia", "currency": "Indonesian Rupiah" }, "ILS": { "country": "Israel", "currency": "New Israeli Sheqel" }, "JPY": { "country": "Japan", "currency": "Yen" }, "KRW": { "country": "Korea, Republic of", "currency": "South Korean Won" }, "CHF": { "country": "Switzerland", "currency": "Swiss Franc" }, "MYR": { "country": "Malaysia", "currency": "Malaysian Ringgit" }, "PHP": { "country": "Philippines", "currency": "Philippine Peso" }, "PLN": { "country": "Poland", "currency": "Poland Zloty" }, "SGD": { "country": "Singapore", "currency": "Singapore Dollar" }, "ZAR": { "country": "South Africa", "currency": "South African Rand" }, "SEK": { "country": "Sweden", "currency": "Swedish Krona" }, "THB": { "country": "Thailand", "currency": "Thai Baht" }, "GBP": { "country": "United Kingdom", "currency": "Pound Sterling" } };
  displayedColumns = ["code","rate"];
  
  constructor(private appService: AppService,private util : UtilService) {
    this.countryArr = Object.keys(this.countryJson);
    this.loadLatest();
  }
  latestRate = [];

  loadLatest() {
    var latest = this.appService.loadLatest(this.currentCountryCode).subscribe(
      (data: { status: string, response: any }) => {
        if (data) {
          this.latestRate = this.util.objToArray(data["rates"],"code","rate");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
