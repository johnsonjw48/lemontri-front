import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import {OpenFactFoodService} from "../../services/open-fact-food.service";
import {Subscription} from "rxjs";
import {BacDeTriService} from "../../services/bac-de-tri.service";
import {BacDeTri} from "../../interfaces/bac-de-tri";

@Component({
  selector: 'app-scanned-item',
  templateUrl: './scanned-item.component.html',
  styleUrls: ['./scanned-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {
  foodInfos!: any;
  foodInfoSubscription!: Subscription;
  bac_tri_adapte!: BacDeTri;
  constructor(private foodInfosService: OpenFactFoodService,
              private bacTri: BacDeTriService) {
  }

  @Input()
  article: Article | undefined;

  ngOnInit(): void {
    this.foodInfoSubscription = this.foodInfosService.foodInfosSubject.subscribe({
      next: (value) => {
        this.foodInfos = value
        if (value.status_verbose === 'product found' && value.product.packaging) {
          this.bac_tri_adapte = this.bacTri.get_sorting_bing(value.product.packaging)
        }
      }
    })
    this.foodInfosService.getFoodInfos(<string>this.article?.name)
  }

}
