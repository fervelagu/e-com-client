import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DetailComponent } from './detail/detail.component';
import {EditProductComponent} from './edit-product/edit-product.component'

export const routes: Routes = [
    { path: 'home',  component: AppComponent },
    { 
      path:'products', 
      component: ProductPageComponent,
      children:[
        {
          path: 'new',
          component: NewProductComponent
        }
      ]
    },
    {
      path: 'new',
      component: NewProductComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent,
        children:[
            {
                path:'edit',
                component:EditProductComponent
            }
        ]
    }
]

