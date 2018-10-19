import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id:string
  producto: any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
    this.productService.getOneProduct(this.id)
    .subscribe(p => {
      this.producto = p
    })
  }

  saveProducto(){
    if(!window.confirm('Estás seguro?')) return
    this.productService.editProduct(this.producto)
    .subscribe(() => {
     this.router.navigate(['products'])
    })
  }

  removeProduct(id){
    this.productService.deleteProduct(id)
    .subscribe(() => {
      this.router.navigate(['products'])
    })
  }

}
