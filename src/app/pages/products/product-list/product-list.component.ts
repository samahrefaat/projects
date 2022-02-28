import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  numbers=[
    {number:"5" , viewValue: '5'},
    {number:"10" , viewValue: '10'},
    {number:"20" , viewValue: '20'},
    {number:"50" , viewValue: '50'},
    {number:"100" , viewValue: '100'},


  ]
  pageSizeOption = [1, 2, 4, 6, 12, 14];


  constructor() { }

  ngOnInit(): void {
  }

}
