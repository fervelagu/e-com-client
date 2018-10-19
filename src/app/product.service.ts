import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/products/"

  constructor(
    private http:Http,
  ) { }

  getAllProducts(){
    return this.http.get(this.url).toPromise()
    .then( (res: Response) => res.json() )
    .catch( e => console.log(e) )
  }

  getOneProduct(id){
    return this.http.get(this.url + id).pipe(
      map( (res: Response) => res.json() )
    )
  }

  createProduct(obj){
    return this.http.post(this.url, obj).pipe(
      map( (res: Response) => res.json() )
    )
  }

  editProduct(obj){
    return this.http.put(this.url + obj._id, obj).pipe(
      map( (res: Response) => res.json() )
    )
  }

  deleteProduct(id){
    return this.http.delete(this.url + id).pipe(
      map( (res: Response) => res.json() )
    )
  }
}