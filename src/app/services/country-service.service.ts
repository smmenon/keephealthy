import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private _countryStateURL: "../assets/json/countries_states.json";
  public countries: any;
  public states: any;
  private jsonObj: any;

  constructor(public http:Http) { 
  }

  getCountries(): Observable<any> {
    return this.http.get("../assets/json/countries_states.json")
        .pipe(map((res:Response) => res.json().countries));
  }
}