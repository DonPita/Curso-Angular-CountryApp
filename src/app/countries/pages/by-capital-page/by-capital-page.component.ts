import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSevice: CountriesService) { }

  //Para guardar la info al cambiar de página
  ngOnInit(): void {
    this.countries = this.countriesSevice.cacheStore.byCapital.countries;
    this.initialValue = this.countriesSevice.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesSevice.searchCapital(term)
      .subscribe(countries => { //si no te suscribes no funciona
        this.countries = countries;
        this.isLoading = false;
      });



  }
}
