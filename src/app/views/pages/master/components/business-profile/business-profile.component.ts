import { Component } from '@angular/core';
import { CountryCodes } from './business-profile.models';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrl: './business-profile.component.scss'
})
export class BusinessProfileComponent {
  countries: CountryCodes[] = [
    {
      "countryname": "Afghanistan",
      "countrycallingcode": "93"
    },
    {
      "countryname": "Albania",
      "countrycallingcode": "355"
    },
    {
      "countryname": "Algeria",
      "countrycallingcode": "213"
    },
    {
      "countryname": "Angola",
      "countrycallingcode": "244"
    },
    {
      "countryname": "Argentina",
      "countrycallingcode": "54"
    },
    {
      "countryname": "Armenia",
      "countrycallingcode": "374"
    },
    {
      "countryname": "Australia",
      "countrycallingcode": "61"
    },
    {
      "countryname": "Austria",
      "countrycallingcode": "43"
    },
    {
      "countryname": "Azerbaijan",
      "countrycallingcode": "994"
    },
    {
      "countryname": "Bahrain",
      "countrycallingcode": "973"
    },
    {
      "countryname": "Bangladesh",
      "countrycallingcode": "880"
    },
    {
      "countryname": "Belarus",
      "countrycallingcode": "375"
    },
    {
      "countryname": "Belgium",
      "countrycallingcode": "32"
    },
    {
      "countryname": "Benin",
      "countrycallingcode": "229"
    },
    {
      "countryname": "Bolivia",
      "countrycallingcode": "591"
    },
    {
      "countryname": "Botswana",
      "countrycallingcode": "267"
    },
    {
      "countryname": "Brazil",
      "countrycallingcode": "55"
    },
    {
      "countryname": "Bulgaria",
      "countrycallingcode": "359"
    },
    {
      "countryname": "Burkina Faso",
      "countrycallingcode": "226"
    },
    {
      "countryname": "Burundi",
      "countrycallingcode": "257"
    },
    {
      "countryname": "Cambodia",
      "countrycallingcode": "855"
    },
    {
      "countryname": "Cameroon",
      "countrycallingcode": "237"
    },
    {
      "countryname": "Canada",
      "countrycallingcode": "1"
    },
    {
      "countryname": "Chad",
      "countrycallingcode": "235"
    },
    {
      "countryname": "Chile",
      "countrycallingcode": "56"
    },
    {
      "countryname": "China",
      "countrycallingcode": "86"
    },
    {
      "countryname": "Colombia",
      "countrycallingcode": "57"
    },
    {
      "countryname": "Congo",
      "countrycallingcode": "242"
    },
    {
      "countryname": "Costa Rica",
      "countrycallingcode": "506"
    },
    {
      "countryname": "Croatia",
      "countrycallingcode": "385"
    },
    {
      "countryname": "Czech Republic",
      "countrycallingcode": "420"
    },
    {
      "countryname": "Denmark",
      "countrycallingcode": "45"
    },
    {
      "countryname": "Ecuador",
      "countrycallingcode": "593"
    },
    {
      "countryname": "Egypt",
      "countrycallingcode": "20"
    },
    {
      "countryname": "El Salvador",
      "countrycallingcode": "503"
    },
    {
      "countryname": "Eritrea",
      "countrycallingcode": "291"
    },
    {
      "countryname": "Ethiopia",
      "countrycallingcode": "251"
    },
    {
      "countryname": "Finland",
      "countrycallingcode": "358"
    },
    {
      "countryname": "France",
      "countrycallingcode": "33"
    },
    {
      "countryname": "Gabon",
      "countrycallingcode": "241"
    },
    {
      "countryname": "Gambia",
      "countrycallingcode": "220"
    },
    {
      "countryname": "Georgia",
      "countrycallingcode": "995"
    },
    {
      "countryname": "Germany",
      "countrycallingcode": "49"
    },
    {
      "countryname": "Ghana",
      "countrycallingcode": "233"
    },
    {
      "countryname": "Greece",
      "countrycallingcode": "30"
    },
    {
      "countryname": "Guatemala",
      "countrycallingcode": "502"
    },
    {
      "countryname": "Guinea-Bissau",
      "countrycallingcode": "245"
    },
    {
      "countryname": "Haiti",
      "countrycallingcode": "509"
    },
    {
      "countryname": "Honduras",
      "countrycallingcode": "504"
    },
    {
      "countryname": "Hong Kong",
      "countrycallingcode": "852"
    },
    {
      "countryname": "Hungary",
      "countrycallingcode": "36"
    },
    {
      "countryname": "India",
      "countrycallingcode": "91"
    },
    {
      "countryname": "Indonesia",
      "countrycallingcode": "62"
    },
    {
      "countryname": "Iraq",
      "countrycallingcode": "964"
    },
    {
      "countryname": "Ireland",
      "countrycallingcode": "353"
    },
    {
      "countryname": "Israel",
      "countrycallingcode": "972"
    },
    {
      "countryname": "Italy",
      "countrycallingcode": "39"
    },
    {
      "countryname": "Ivory Coast",
      "countrycallingcode": "225"
    },
    {
      "countryname": "Japan",
      "countrycallingcode": "81"
    },
    {
      "countryname": "Jordan",
      "countrycallingcode": "962"
    },
    {
      "countryname": "Kenya",
      "countrycallingcode": "254"
    },
    {
      "countryname": "Kuwait",
      "countrycallingcode": "965"
    },
    {
      "countryname": "Laos",
      "countrycallingcode": "856"
    },
    {
      "countryname": "Latvia",
      "countrycallingcode": "371"
    },
    {
      "countryname": "Lebanon",
      "countrycallingcode": "961"
    },
    {
      "countryname": "Lesotho",
      "countrycallingcode": "266"
    },
    {
      "countryname": "Liberia",
      "countrycallingcode": "231"
    },
    {
      "countryname": "Libya",
      "countrycallingcode": "218"
    },
    {
      "countryname": "Lithuania",
      "countrycallingcode": "370"
    },
    {
      "countryname": "Macedonia",
      "countrycallingcode": "389"
    },
    {
      "countryname": "Madagascar",
      "countrycallingcode": "261"
    },
    {
      "countryname": "Malawi",
      "countrycallingcode": "265"
    },
    {
      "countryname": "Malaysia",
      "countrycallingcode": "60"
    },
    {
      "countryname": "Mali",
      "countrycallingcode": "223"
    },
    {
      "countryname": "Mauritania",
      "countrycallingcode": "222"
    },
    {
      "countryname": "Mexico",
      "countrycallingcode": "52"
    },
    {
      "countryname": "Moldova",
      "countrycallingcode": "373"
    },
    {
      "countryname": "Mongolia",
      "countrycallingcode": "976"
    },
    {
      "countryname": "Morocco",
      "countrycallingcode": "212"
    },
    {
      "countryname": "Mozambique",
      "countrycallingcode": "258"
    },
    {
      "countryname": "Namibia",
      "countrycallingcode": "264"
    },
    {
      "countryname": "Nepal",
      "countrycallingcode": "977"
    },
    {
      "countryname": "Netherlands",
      "countrycallingcode": "31"
    },
    {
      "countryname": "New Zealand",
      "countrycallingcode": "64"
    },
    {
      "countryname": "Nicaragua",
      "countrycallingcode": "505"
    },
    {
      "countryname": "Niger",
      "countrycallingcode": "227"
    },
    {
      "countryname": "Nigeria",
      "countrycallingcode": "234"
    },
    {
      "countryname": "Norway",
      "countrycallingcode": "47"
    },
    {
      "countryname": "Oman",
      "countrycallingcode": "968"
    },
    {
      "countryname": "Pakistan",
      "countrycallingcode": "92"
    },
    {
      "countryname": "Panama",
      "countrycallingcode": "507"
    },
    {
      "countryname": "Papua New Guinea",
      "countrycallingcode": "675"
    },
    {
      "countryname": "Paraguay",
      "countrycallingcode": "595"
    },
    {
      "countryname": "Philippines",
      "countrycallingcode": "63"
    },
    {
      "countryname": "Poland",
      "countrycallingcode": "48"
    },
    {
      "countryname": "Portugal",
      "countrycallingcode": "351"
    },
    {
      "countryname": "Qatar",
      "countrycallingcode": "974"
    },
    {
      "countryname": "Romania",
      "countrycallingcode": "40"
    },
    {
      "countryname": "Russia",
      "countrycallingcode": "7"
    },
    {
      "countryname": "Rwanda",
      "countrycallingcode": "250"
    },
    {
      "countryname": "Saudi Arabia",
      "countrycallingcode": "966"
    },
    {
      "countryname": "Senegal",
      "countrycallingcode": "221"
    },
    {
      "countryname": "Serbia",
      "countrycallingcode": "381"
    },
    {
      "countryname": "Sierra Leone",
      "countrycallingcode": "232"
    },
    {
      "countryname": "Singapore",
      "countrycallingcode": "65"
    },
    {
      "countryname": "Slovakia",
      "countrycallingcode": "421"
    },
    {
      "countryname": "Slovenia",
      "countrycallingcode": "386"
    },
    {
      "countryname": "Somalia",
      "countrycallingcode": "252"
    },
    {
      "countryname": "South Africa",
      "countrycallingcode": "27"
    },
    {
      "countryname": "South Sudan",
      "countrycallingcode": "211"
    },
    {
      "countryname": "Spain",
      "countrycallingcode": "34"
    },
    {
      "countryname": "Sri Lanka",
      "countrycallingcode": "94"
    },
    {
      "countryname": "Sudan",
      "countrycallingcode": "249"
    },
    {
      "countryname": "Swaziland",
      "countrycallingcode": "268"
    },
    {
      "countryname": "Sweden",
      "countrycallingcode": "46"
    },
    {
      "countryname": "Switzerland",
      "countrycallingcode": "41"
    },
    {
      "countryname": "Taiwan",
      "countrycallingcode": "886"
    },
    {
      "countryname": "Tajikistan",
      "countrycallingcode": "992"
    },
    {
      "countryname": "Tanzania",
      "countrycallingcode": "255"
    },
    {
      "countryname": "Thailand",
      "countrycallingcode": "66"
    },
    {
      "countryname": "Tunisia",
      "countrycallingcode": "216"
    },
    {
      "countryname": "Turkey",
      "countrycallingcode": "90"
    },
    {
      "countryname": "Turkmenistan",
      "countrycallingcode": "993"
    },
    {
      "countryname": "Uganda",
      "countrycallingcode": "256"
    },
    {
      "countryname": "Ukraine",
      "countrycallingcode": "380"
    },
    {
      "countryname": "United Arab Emirates",
      "countrycallingcode": "971"
    },
    {
      "countryname": "United Kingdom",
      "countrycallingcode": "44"
    },
    {
      "countryname": "United States",
      "countrycallingcode": "1"
    },
    {
      "countryname": "Uruguay",
      "countrycallingcode": "598"
    },
    {
      "countryname": "Uzbekistan",
      "countrycallingcode": "998"
    }
  ]
  selectedCountry: string | undefined; // Holds the selected countrycallingcode

  constructor() {
    // Add a display label combining country name and calling code
    this.countries.forEach(country => {
      country.displayLabel = `+${country.countrycallingcode} ${country.countryname}`;
    });
  }
}
