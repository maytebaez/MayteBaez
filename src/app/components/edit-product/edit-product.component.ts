import { Component } from '@angular/core';
import { BankProduct } from '../../interfaces/bank-product';
import { BankProductsService } from '../../services/bank-products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product!: BankProduct;

  constructor(private bankService: BankProductsService) {}

  ngOnInit() {
    this.product = history.state.product;
  }

  onEdit(product: BankProduct){
    this.bankService.editProduct(product);
  }
}
