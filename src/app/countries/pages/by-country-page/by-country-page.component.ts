import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  //Se inicializa en el constructor el servicio para poder llamar al método
  constructor(private countriesService: CountriesService) { }

  searchByCountry(term: string):void {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

}
