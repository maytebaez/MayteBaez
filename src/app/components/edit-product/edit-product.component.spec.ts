import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { EditProductComponent } from './edit-product.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  const mockProduct = {
    id: '5612',
    name: 'Prueba',
    description: 'Prueba',
    date_release: new Date('2024-12-15'),
    date_revision: new Date('2024-12-15'),
    logo: 'logo.png'
  };

  beforeEach(async () => {
    Object.defineProperty(history, 'state', {
      value: { product: mockProduct },
      writable: true,
    });
    
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [EditProductComponent, ProductFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
