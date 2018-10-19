import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  producto: any = {}

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  saveProducto(){
    this.producto.specs = this.producto.specs.split(',')
    this.productService.createProduct(this.producto)
    .subscribe(p=>{
      this.router.navigate(['products'])
    })
  }

  ngOnInit() {
  }

}
