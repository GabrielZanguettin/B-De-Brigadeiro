import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product, ProductType } from '../../../../../../shared/types';
import { products } from '../../../../../../data/products';

@Component({
  selector: 'app-treat-box-builder-modal',
  imports: [CommonModule],
  templateUrl: './treat-box-builder-modal.component.html',
  styleUrl: './treat-box-builder-modal.component.scss'
})
export class TreatBoxBuilderModalComponent implements OnInit {
  @Input() product!: Product;

  products: Product[] = products;

  quantity: number = 1;
  step: number = 1;

  selectedProducts: { id: number; name: string; quantity: number }[] = [];

  ngOnInit() {
    this.selectedProducts = this.productOptions.map(p => ({
      id: p.id,
      name: p.name,
      quantity: 0
    }));
  }

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
    this.resetSelectedQuantities();
  }

  nextStep() {
    if (this.step < 2) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  /** total permitido (quantity * capacity da caixa) */
  get maxProducts(): number {
    return this.product.capacity ? this.quantity * this.product.capacity : 0;
  }

  /** total selecionado até agora */
  get totalSelected(): number {
    return this.selectedProducts.reduce((sum, p) => sum + p.quantity, 0);
  }

  /** apenas os produtos do tipo Doce */
  get productOptions(): Product[] {
    return this.products.filter(p => p.type === ProductType.Doce);
  }

  trackByIndex(index: number): number {
    return index;
  }

  increaseProduct(index: number) {
    if (this.totalSelected < this.maxProducts) {
      this.selectedProducts[index].quantity++;
    }
  }

  decreaseProduct(index: number) {
    if (this.selectedProducts[index].quantity > 0) {
      this.selectedProducts[index].quantity--;
    }
  }

  adicionarAoCarrinho() {
    console.log(`Caixinhas: ${this.quantity}, capacidade: ${this.product.capacity}`);
    console.log(`Limite total de produtos: ${this.maxProducts}`);
    console.log("Produtos escolhidos:", this.selectedProducts);
    this.closeModal();
  }

  private resetSelectedQuantities(): void {
    this.selectedProducts.forEach(p => (p.quantity = 0));
  }
}
