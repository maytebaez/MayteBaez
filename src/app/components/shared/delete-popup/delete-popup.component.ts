import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopupResponse } from '../../../interfaces/popup-response';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css'
})
export class DeletePopupComponent {
  @Input() productId!: string;
  @Output() popupResponseEvent = new EventEmitter<PopupResponse>();
  popupResponse: PopupResponse = {
    confirm: false,
    showPopup: false,
    productId: ''
  };

  confirm() {
    this.popupResponse.confirm = true;
    this.popupResponse.productId = this.productId;
    this.popupResponseEvent.emit(this.popupResponse);
  }

  closePopup() {
    this.popupResponseEvent.emit(this.popupResponse);
  }
}
