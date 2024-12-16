import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableComponent } from './product-table.component';
import { Router } from '@angular/router';
import { BankProduct } from '../../interfaces/bank-product';
import { SharedModule } from '../../modules/shared.module';
import { FormsModule } from '@angular/forms';

describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports:[SharedModule, FormsModule],
      declarations: [ProductTableComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when some method is called', () => {
    var product: BankProduct ={
      id: '5612',
      name: 'Prueba',
      description: 'Prueba',
      date_release: new Date('2024-12-15'),
      date_revision: new Date('2024-12-15'),
      logo: 'logo.png'
    }
    component.editProduct(product);
    
    expect(routerSpy.navigate).toHaveBeenCalledWith(
      ['/edit', '5612'],
      jasmine.objectContaining({
        state: jasmine.objectContaining({
          product: jasmine.objectContaining({
            id: '5612',
            name: 'Prueba',
            description: 'Prueba',
            date_release: new Date('2024-12-15'),
            date_revision: new Date('2024-12-15'),
            logo: 'logo.png'
          })
        })
      })
    );
  });
});
