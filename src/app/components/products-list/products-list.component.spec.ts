import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductTableComponent } from '../product-table/product-table.component';
import { SharedModule } from '../../modules/shared.module';
import { FormsModule } from '@angular/forms';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, FormsModule],
      declarations: [ProductsListComponent, ProductTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
