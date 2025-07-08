import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-calendly',
  templateUrl: './modal-calendly.component.html',
  styleUrls: ['./modal-calendly.component.scss']
})
export class ModalCalendlyComponent implements OnInit {

  rotaCalendly: SafeResourceUrl = '';

  constructor(
    private sanitizer: DomSanitizer,
    public activeModal: NgbActiveModal
  ) {}

  getMesAtual(): string {
    const dataAtual = new Date();
    return (dataAtual.getMonth() + 1).toString().padStart(2, '0');
  }

  atualizarRota() {
    const mesAtual = this.getMesAtual();
    const url = `https://calendly.com/suporteparametriz/30min?month=2025-${mesAtual}`;
    this.rotaCalendly = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.atualizarRota();
  }
}
