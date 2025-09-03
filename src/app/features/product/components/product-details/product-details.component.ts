import { Component, inject, Input } from '@angular/core';
import { Product, ProductType } from '../../../../shared/types';
import { CommonModule } from '@angular/common';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TreatBoxBuilderModalComponent } from './components/treat-box-builder-modal/treat-box-builder-modal.component';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  private readonly modalService = inject(NgbModal);

  canBuy(product: Product | null): boolean {
    return !!product && product.type === ProductType.Caixa;
  }

  openTreatBoxBuilderModal() {
    const modalRef = this.modalService.open(TreatBoxBuilderModalComponent, { size: 'm', backdrop: 'static', centered: true } );
    modalRef.componentInstance.product = this.product;
  }
}
