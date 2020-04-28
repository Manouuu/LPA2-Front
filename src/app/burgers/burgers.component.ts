import { Component, OnInit } from '@angular/core';
import { BurgersService, Burger } from '../REST';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {

  burgers: Burger[];

  ngOnInit() {
    this.getBurgersList();
  }

  constructor(private burgerService: BurgersService) {}

  getBurgersList() {
    this.burgerService.listBurgers().subscribe(
      (results) => {
        this.burgers = results;
      }
    );
  }
}
