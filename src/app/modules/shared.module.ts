import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsButtonComponent } from '../components/shared/options-button/options-button.component';
import { DeletePopupComponent } from '../components/shared/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    OptionsButtonComponent,
    DeletePopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OptionsButtonComponent,
    DeletePopupComponent
  ]
})
export class SharedModule { }
