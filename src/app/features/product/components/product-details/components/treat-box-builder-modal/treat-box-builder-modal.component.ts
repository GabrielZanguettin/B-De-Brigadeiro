import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-treat-box-builder-modal',
  imports: [],
  templateUrl: './treat-box-builder-modal.component.html',
  styleUrl: './treat-box-builder-modal.component.scss'
})
export class TreatBoxBuilderModalComponent {
  private readonly modalService = inject(NgbModal);

  closeModal(): void {
    this.modalService.dismissAll();
  }
}
