import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
import { ProductManagerComponent } from './product-manager/product-manager.component';

const routes: Routes = [
  {
    path: "list",
    component: ProductManagerComponent,
  },
  {
    path: "**",
    redirectTo: "list",
  }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductManagerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("products", productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  providers: [
    ProductService,
  ],
})
export class ProductsModule { }
