import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductType } from '../../../../../../shared/types';
import { products } from '../../../../../../data/products';

@Component({
  selector: 'app-treat-box-builder-modal',
  imports: [CommonModule],
  templateUrl: './treat-box-builder-modal.component.html',
  styleUrl: './treat-box-builder-modal.component.scss'
})
export class TreatBoxBuilderModalComponent {
  @Input() product!: Product;

  products: Product[] = products;

  quantity: number = 1;
  step: number = 1;
  dropdownOpen = false;
  selectedProducts: Product[] = [];

  private readonly modalService = inject(NgbModal);

  closeModal(): void {
    this.modalService.dismissAll();
  }

  increment() {
    this.quantity += 1;
  }

  decrement() {
    if (this.quantity === 1) return;

    this.quantity -= 1;
  }

  nextStep() {
    if (this.step < 2) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  get quantityArray(): number[] {
    return Array.from({ length: this.quantity }, (_, i) => i);
  }

  get doceOptions(): Product[] {
    return this.products.filter(p => p.type === ProductType.Doce);
  }

  trackByIndex(index: number): number {
    return index;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    setTimeout(() => (this.dropdownOpen = false), 150);
  }

  removeSelectedProduct(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
  }

  toggleSelectProduct(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    const index = this.selectedProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
    } else {
      this.selectedProducts.push(product);
    }
  }

  isProductSelected(product: Product): boolean {
    return this.selectedProducts.some(p => p.id === product.id);
  }

  adicionarAoCarrinho() {
    console.log(`Adicionado ${this.quantity} caixinhas ao carrinho`);
    this.closeModal();
  }
}
