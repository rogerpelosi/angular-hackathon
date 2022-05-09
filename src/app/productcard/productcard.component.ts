import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  constructor() { }

  @Input() indProduct: Product;

  ngOnInit(): void {
  }

}
