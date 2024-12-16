import { Component } from '@angular/core';
import { BankProduct } from '../../interfaces/bank-product';
import { BankProductsService } from '../../services/bank-products.service';
import { Router } from '@angular/router';
import { PopupResponse } from '../../interfaces/popup-response';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  public data: BankProduct[] = [];
  public filteredProducts: BankProduct[] = [];
  public paginatedProducts: BankProduct[] = [];
  public itemsPerPage: number = 5;
  public searchInput: string = '';
  public popupResponse: PopupResponse = {
    confirm: false,
    showPopup: false,
    productId: ''
  };

  constructor(private bankService: BankProductsService, private router: Router){}

  ngOnInit(): void{
    this.bankService.getProducts().subscribe(
      response => {
        this.data = response.data;
        this.filteredProducts = this.data;
        this.updatePaginatedProducts();
      },
      error => {
        console.error('Hubo un problema al obtener los productos', error);
      }
    );
  }

  onChangeItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.updatePaginatedProducts();
  }

  onChangeShowPopup(popupResponse: PopupResponse){
    this.popupResponse = popupResponse;
  }

  onConfirmDeleteProduct(popupResponse: PopupResponse){
    this.popupResponse = popupResponse;
    if(popupResponse.confirm){
      this.bankService.deleteProduct(popupResponse.productId).subscribe(
        response => {
          window.location.reload();
          alert('El producto se ha eliminado exitosamente!');
        },
        () => {
          alert('Ha ocurrido un error al eliminar el producto!');
        }
      );
    }
  }

  updatePaginatedProducts(): void {
    if(this.filteredProducts.length > 0){
      this.paginatedProducts = this.filteredProducts.slice(0, this.itemsPerPage);
    }
  }

  searchProduct() {
    this.filteredProducts = this.searchInput !== '' ? this.data.filter(product =>
      product.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchInput.toLowerCase())) : this.data;
    this.updatePaginatedProducts();
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
