import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CustomerorderService } from '../customerorder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private customerOrders: CustomerorderService){}

  newProduct: Product = new Product;
  products: Product[] = [];

  name:string = '';
  quantity:number = 0;

  ngOnInit(): void {
    this.customerOrders.gatherProducts().subscribe({
      next: products=>this.products = (products.reverse()),
      error: err=>console.log(err)
    })
  }

  formSubmission(){
    this.newProduct.name = this.name;
    this.newProduct.quantity = this.quantity;

    if(this.newProduct !== undefined && this.newProduct.name !== ''){
      this.customerOrders.postProduct(this.newProduct).subscribe({
        next: newProd=>{
          this.products.unshift(newProd);
          this.name = '';
          this.quantity = 0},
        error: err=>console.log(err)
      })
    }
    this.customerOrders.postProduct(this.newProduct)
  }

}
