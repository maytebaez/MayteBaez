import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankProduct } from '../../interfaces/bank-product';
import { Router } from '@angular/router';
import { PopupResponse } from '../../interfaces/popup-response';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {
  @Input() bankProducts: BankProduct[] = [];
  @Output() itemsPerPageChange = new EventEmitter<number>();
  @Output() showPopup = new EventEmitter<PopupResponse>();
  
  public itemsPerPage = 5;
  public itemsCountOptions: number[] = [5, 10, 20];
  public defaultLogoSrc: string = 'assets/images/defaultLogo.jpg';

  ngOnInit(): void{
  }

  constructor(private router: Router) {}

  editProduct(product: BankProduct) {
    this.router.navigate(['/edit', product.id], { state: { product } });
  }

  deleteProduct(productId: string) {
    const popupResponse: PopupResponse = {
      confirm: false,
      showPopup: true,
      productId: productId
    };
    this.showPopup.emit(popupResponse);
  }

  onItemsPerPageChange(event: any): void {
    this.itemsPerPage = event.target.value;
    this.itemsPerPageChange.emit(this.itemsPerPage);
  }

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = this.defaultLogoSrc;
  }
}
