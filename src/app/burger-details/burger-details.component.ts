import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgersService } from '../REST';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.scss']
})
export class BurgerDetailsComponent implements OnInit {

  details;
  id: number;
  nutriments = [];

  constructor(
      private route: ActivatedRoute
    , private location: Location
    , private burgerService: BurgersService
  ) 
  { 
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.burgerService.burgerDetail(this.id).subscribe(
      (res: any) => {
        for(let key in res.nutriments) {
          this.nutriments.push({ key: key, value: res.nutriments[key] });
        }
        this.details = res;
      }
    )
  }

  goBack() {
    this.location.back();
  }

}
