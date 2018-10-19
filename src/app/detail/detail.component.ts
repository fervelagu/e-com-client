import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  producto: any = {name:''}
  id: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params.id)
      this.id = params.id
      this.productService.getOneProduct(this.id)
      .subscribe(product => {
        this.producto = product
      })
    })
    
    //query
    this.activeRoute.queryParams.subscribe(query => {
      console.log(query)
    })
  }

}