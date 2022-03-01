import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { environment } from '../../environments/environment';
import { LocalstorageService } from './localstorage.service';

import {HttpParams} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURLProducts = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private token: LocalstorageService,

    ) {}

getProducts(userId: string, brancheIds: string): Observable<Product[]> {
    const tok =JSON.parse(localStorage.getItem('token'));    
    return this.http.post<Product[]>(`${this.apiURLProducts}`,{
      'userId': '59b3c7be-2c7b-7e48-651c-9c10e1ecabd5',
      'brancheIds': [
        '2f1172a9-1b5d-6fc4-777e-3e3b283cabde'
      ]
    }, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    });
  }
  
/*
"{
  'userId': '59b3c7be-2c7b-7e48-651c-9c10e1ecabd5',
  'brancheIds': [
    '2f1172a9-1b5d-6fc4-777e-3e3b283cabde'
  ]
}"

getProducts(userId: string, brancheIds: string): Observable<Product[]> {
  const tok =JSON.parse(localStorage.getItem('token'));    
  return this.http.post<Product[]>(`${this.apiURLProducts}Token=${tok}`,{ userId, brancheIds }, {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  });
}*/

/*getProducts(userId: string, brancheIds: string): Observable<Product[]> {
    //const tok =JSON.parse(localStorage.getItem('token'));    
    return this.http.post<Product[]>(`${this.apiURLProducts}Token=03FW76830YB1G9M5N8Y943WS2ABU9JU5037279FR9RZ6T307XOH54)
    `,{ userId, brancheIds }, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    });*/


}

//getProducts(userId: string, brancheIds: string): Observable<Product[]> {
  //const tok =JSON.parse(localStorage.getItem('token'));    
 // return this.http.post<Product[]>(`${this.apiURLProducts}`,{userId,brancheIds})
 


//}
