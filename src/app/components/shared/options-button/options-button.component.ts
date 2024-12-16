import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankProduct } from '../../../interfaces/bank-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-button',
  templateUrl: './options-button.component.html',
  styleUrl: './options-button.component.css'
})
export class OptionsButtonComponent {
  @Input() product!: BankProduct;
  @Output() editClicked = new EventEmitter<BankProduct>();
  @Output() deleteClicked = new EventEmitter<string>();

  edit() {
    this.editClicked.emit(this.product);
  }

  delete() {
    this.deleteClicked.emit(this.product.id);
  }
}
