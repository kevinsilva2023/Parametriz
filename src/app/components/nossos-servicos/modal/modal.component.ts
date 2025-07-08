import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Dados {
  id: string,
  titulo: string
  descricao: string,
  descricaoExpandida: string,
  caracteristicas: string[],
  beneficios: string[],
  etapasProcesso: string[],
  icone: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  @Input() dados: Dados | undefined;

  constructor(private modalService: NgbModal) {}

  fecharModal() {
    this.modalService.dismissAll()
  }
}
