import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.model';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  userId:string;
  brancheIds:string;
  products:Product[]=[];
  currentProductId!: string;
  pppp:Product[]=[]

product= new Product
  id
  constructor(
    private productsService: ProductService,
    private router: Router,
    private route: ActivatedRoute,


    ) { }

  ngOnInit(): void {
    this.route.snapshot.params.id; 
    this._getProducts();
    //this. getProduct()
    this._getProduectById();



  }
  private _getProducts() {
    this.productsService.getProducts(this.userId, this.brancheIds).subscribe((products) => {
      let myMap =new Map();
      this.products = products;
      myMap.set( 'task', products)
      let pp = myMap.get('task')
     // const meals = pp.result
      this.products=pp.result
      //console.log(products)
      //if (products) { console.log(products) }

    });
  } 
  private _getProduectById() {
    console.log(this.route.snapshot.params.id);
    
    this.productsService.getProduct(this.route.snapshot.params.id).subscribe((res) => {
     this.product = res
     let myMap =new Map();

     myMap.set( 'task',this.product)
     let ppp = myMap.get('task')
     this.product=ppp.result


    console.log(res)

    })
   
  }

}
