import { Component } from '@angular/core';
import { BankProductsService } from '../../services/bank-products.service';
import { BankProduct } from '../../interfaces/bank-product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  public newProduct!: BankProduct;

  constructor(private bankService: BankProductsService) {
    this.clearBankProduct();
  }

  clearBankProduct(){
    this.newProduct = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: new Date(),
      date_revision: new Date(),
    };
  }

  onCreate(product: BankProduct) {
    this.createNewProduct(product);
  }

  createNewProduct(product: BankProduct){
    this.bankService.createProduct(product).subscribe((resp) =>{
      alert('Producto creado con éxito!');
      this.clearBankProduct();
    },
    () => {
      alert('Ha ocurrido un error al crear el producto!');
    });
  }
}
