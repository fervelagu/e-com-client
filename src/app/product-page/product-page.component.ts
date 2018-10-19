import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  
  productos: Array<any>
  
  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  showProduct(producto){
    console.log(producto)
  }

  ngOnInit() {
    this.productService.getAllProducts()
    .then(productos=>{
      this.productos = this.productos
    })
  }

}
