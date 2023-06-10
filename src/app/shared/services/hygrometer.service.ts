import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hygrometer} from "../interfaces/Hygrometer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HygrometerService {

  constructor(private http: HttpClient) { }

  getAllHygrometers(): Observable<Array<Hygrometer>> {
    return this.http.get<Array<Hygrometer>>("https://backend-aquamole.azurewebsites.net/hygrometers");
  }
}
