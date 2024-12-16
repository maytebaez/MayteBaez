import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import { BankProductsService } from '../../services/bank-products.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [CreateProductComponent, ProductFormComponent],
      providers: [BankProductsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
