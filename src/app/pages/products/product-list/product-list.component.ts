import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interface/product.model';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[]
  userId:string
  brancheIds:string
 
  numbers=[
    {number:"5" , viewValue: '5'},
    {number:"10" , viewValue: '10'},
    {number:"20" , viewValue: '20'},
    {number:"50" , viewValue: '50'},
    {number:"100" , viewValue: '100'},


  ]
  pageSizeOption = [1, 2, 4, 6, 12, 14];


  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this._getProducts();

  }
  private _getProducts() {
    this.productsService.getProducts(this.userId, this.brancheIds).subscribe((products) => {
      let myMap =new Map();
      this.products = products;
      myMap.set( 'task', products)
      let pp = myMap.get('task')
     // const meals = pp.result
      this.products=pp.result
    //  console.log(products)
      //if (products) { console.log(products) }

    });
  } 

}
