import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCalendlyComponent } from './modal-calendly/modal-calendly.component';

@Component({
  selector: 'app-apresentacao-inicial',
  templateUrl: './apresentacao-inicial.component.html',
  styleUrls: ['./apresentacao-inicial.component.scss']
})
export class ApresentacaoInicialComponent implements OnInit, OnDestroy {
  contadorEmpresasAtendidas = 0;
  contadorPrecisao = 0;
  contadorReducaoTempo = 0;

  animacoesIniciadas = false;
  intervalos: any[] = [];

  ngOnInit(): void {
    this.observarVisibilidade();
  }

  ngOnDestroy(): void {
    this.limparIntervalos();
  }

  constructor(private modalService: NgbModal) { }

  observarVisibilidade(): void {
    const options = { threshold: 0.5, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animacoesIniciadas) {
          this.iniciarAnimacoes();
          this.animacoesIniciadas = true;
        }
      });
    }, options);

    const secao = document.getElementById('home');
    if (secao) observer.observe(secao);
  }

  iniciarAnimacoes(): void {
    this.animarContador(0, 500, 2000, val => this.contadorEmpresasAtendidas = val);
    setTimeout(() => {
      this.animarContador(0, 98, 2500, val => this.contadorPrecisao = val);
    }, 300);
    setTimeout(() => {
      this.animarContador(0, 75, 3000, val => this.contadorReducaoTempo = val);
    }, 600);
  }

  animarContador(inicio: number, fim: number, duracao: number, callback: (val: number) => void): void {
    const incremento = fim / (duracao / 16);
    let atual = inicio;

    const intervalo = setInterval(() => {
      atual += incremento;
      if (atual >= fim) {
        atual = fim;
        clearInterval(intervalo);
        this.removerIntervalo(intervalo);
      }
      callback(Math.floor(atual));
    }, 16);

    this.intervalos.push(intervalo);
  }

  removerIntervalo(intervalo: any): void {
    const i = this.intervalos.indexOf(intervalo);
    if (i > -1) this.intervalos.splice(i, 1);
  }

  limparIntervalos(): void {
    this.intervalos.forEach(i => clearInterval(i));
    this.intervalos = [];
  }

  navegarParaContato(): void {
    const contato = document.getElementById('contato');
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirCalendly() {
    this.modalService.open(ModalCalendlyComponent, {
      size: 'xl',
      centered: true,
      backdrop: 'static'
    });
  }

}
