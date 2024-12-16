import { Injectable } from '@angular/core';
import { BankResponse } from '../interfaces/bank-response';
import { BankProduct } from '../interfaces/bank-product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BankProductsService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<BankResponse<BankProduct[]>>(`${this.baseUrl}`);
  }

  getIdVerification(id: string) : Observable<boolean>{
    return this.http.get<boolean>(`${this.baseUrl}/verification/${id}`);
  }

  createProduct(newProduct: BankProduct) {
    return this.http.post(`${this.baseUrl}`, newProduct)
  }

  deleteProduct(id: string){
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editProduct(product: BankProduct) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.put(`${this.baseUrl}/${product.id}`, product, { headers }).subscribe((resp) =>{
      alert('Producto se actualizó con éxito!');
    },
    () => {
      alert('Ha ocurrido un error al actualizar el producto!');
    });
  }
}
