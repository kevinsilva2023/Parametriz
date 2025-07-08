import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCalendlyComponent } from '../../apresentacao-inicial/modal-calendly/modal-calendly.component';

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
export class ModalComponent {
  @Input() dados: Dados | undefined;

  constructor(private modalService: NgbModal) { }

  fecharModal() {
    this.modalService.dismissAll()
  }

  public navegarParaSecaoContato(event: Event) {
    event.preventDefault(); // <- Isso impede a rolagem nativa
    this.fecharModal()

    setTimeout(() => {
      const elementoSecao = document.getElementById('contato');
      if (elementoSecao) {
        elementoSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // pequeno delay para dar tempo de fechar a modal
  }

  public async abrirCalendly() {
    this.fecharModal();

    await new Promise(resolve => setTimeout(resolve, 300));

    this.modalService.open(ModalCalendlyComponent, {
      size: 'xl',
      centered: true,
      backdrop: 'static'
    });
  }

}
