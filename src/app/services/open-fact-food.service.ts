import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpenFactFoodService {

  private foodInfos: any;
  foodInfosSubject: BehaviorSubject<any> = new BehaviorSubject(<any>{});

  constructor(private http: HttpClient) {

  }

  dispatchFoodInfos () {
    this.foodInfosSubject.next(this.foodInfos);
  }
  getFoodInfos (code: string):void {
    this.http.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .subscribe( (value:any) => {
        this.foodInfos = value
        this.dispatchFoodInfos();
      })
  }
}
