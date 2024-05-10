import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';


@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  //Almacenamiento para cambio de ventana y no perder información
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  //Constructor
  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  //Metodos para guardar la info en LocalStorage
  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) {
      return;
    }
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }



  //Metodo para refactorizar searchCapital, searchCountry y searchRegion
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        //delay(2000) //Espera 1 segundo a dar resultado
      )
  }

  //Para la country-page, buscar por el codigo
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      );
  }


  /*El retorno es un Observable, de un arreglo de paises, por tanto hay que
  decirselo al get tambien, si no da error*/
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        //Tap desata eventos secundarios, que no afectan al desarrollo normal.
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/translation/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocalStorage()),
      );
  }
}
