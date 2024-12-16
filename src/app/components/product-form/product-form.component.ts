import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BankProduct } from '../../interfaces/bank-product';
import { BankProductsService } from '../../services/bank-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @Input() product!: BankProduct;
  @Input() isEditMode!: boolean;

  @Output() formSubmit = new EventEmitter<BankProduct>();
  public productForm!: FormGroup;
  public formSubmitted: boolean = false;
  public existsId: boolean = false;
  
  constructor(private fb: FormBuilder, private bankService: BankProductsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.disableId();
  }

  initForm (){
    this.productForm = this.fb.group({
      id: new FormControl(
        this.product ? this.product.id : '',
        [ Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
      ]),
      name: new FormControl(
        this.product ? this.product.name : '',
        [ Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]),
      description: new FormControl(
        this.product ? this.product.description : '',
        [ Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200)
      ]),
      logo: new FormControl(
        this.product ? this.product.logo : '',
        Validators.required
      ),
      date_revision: new FormControl(
        this.product ? this.product.date_revision : this.initializeTodaysDate(),
        Validators.required
      ),
      date_release: new FormControl(
        this.product ? this.product.date_release : this.initializeTodaysDate(),
        [ Validators.required,
          this.validateReleaseDate
      ]),
    });
  }

  clearBankProduct(){
    this.product = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: new Date(this.initializeTodaysDate()),
      date_revision: new Date(this.initializeTodaysDate()),
    };
    this.initForm();
  }

  disableId() {
    if(this.isEditMode){
      this.productForm.get('id')?.disable();
    }
  }

  onSubmit() {
    this.validateExistsId(this.productForm.get('id')?.value);
    if (this.productForm.valid && !this.existsId) {
      this.setRevisionDate();
      const formValue = { ...this.product, ...this.productForm.value };
      this.formSubmit.emit(formValue);
    }
  }

  initializeTodaysDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  setRevisionDate(){
    var dateReleaseValue = this.productForm.get('date_release')?.value;
    
    if(dateReleaseValue){
      var dateRelease = new Date(dateReleaseValue);
      var dayDateRelease = dateRelease.getDate();
      var monthDateRelease = dateRelease.getMonth();
      var yearDateRelease = dateRelease.getFullYear();

      var newDate = new Date(yearDateRelease + 1, monthDateRelease, dayDateRelease + 1);
      this.product.date_revision = newDate;
      this.productForm.get('date_revision')?.setValue(`${yearDateRelease + 1}-${monthDateRelease + 1}-${dayDateRelease + 1}`);
    }
  }

  validateReleaseDate(control: AbstractControl): { [key: string]: any } | null {
    if (!control.value) {
      return null;
    }
    const dateValue = new Date(control.value);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return dateValue >= currentDate ? null : { invalidDate: true };
  }

  validateExistsId(id: string){
    if(id && id != ''){
      this.bankService.getIdVerification(id).subscribe((resp) => {
          this.existsId = resp;
      });
    }
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }
}
