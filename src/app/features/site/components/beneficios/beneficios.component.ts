import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCalendlyComponent } from '../apresentacao-inicial/modal-calendly/modal-calendly.component';

interface DadosDepoimento {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  texto: string;
  avatar: string;
  avaliacao: number; // 1-5 estrelas
}

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit, OnDestroy {
  public secaoAtiva: string = '';
  public indiceDepoimentoAtual = 0;
  public depoimentoAtual: DadosDepoimento | null = null;

  public problemasAntes = [
    'Configurações manuais demoradas e propensas a erros',
    'Falta de padronização nos processos contábeis',
    'Dificuldade para manter compliance fiscal',
    'Retrabalho constante por inconsistências',
    'Equipe sobrecarregada com tarefas repetitivas',
    'Relatórios imprecisos e desatualizados'
  ];

  public solucoesDepois = [
    'Automação completa de configurações complexas',
    'Processos padronizados e otimizados',
    'Compliance fiscal garantido e atualizado',
    'Eliminação de retrabalho e inconsistências',
    'Equipe focada em atividades estratégicas',
    'Relatórios precisos e em tempo real'
  ];

  public depoimentos: DadosDepoimento[] = [
    {
      id: 1,
      nome: 'Maria Silva',
      cargo: 'Diretora Financeira',
      empresa: 'TechCorp Ltda',
      texto: 'A Parametriz revolucionou nossos processos contábeis. Reduzimos o tempo de fechamento mensal em 60% e eliminamos praticamente todos os erros manuais.',
      avatar: '/assets/logo-white.png',
      avaliacao: 5
    },
    {
      id: 2,
      nome: 'João Santos',
      cargo: 'Controller',
      empresa: 'Indústria Moderna S.A.',
      texto: 'Implementação rápida e suporte excepcional. Nossa equipe contábil agora pode focar em análises estratégicas ao invés de configurações manuais.',
      avatar: '/assets/logo-white.png',
      avaliacao: 4
    },
    {
      id: 3,
      nome: 'Ana Costa',
      cargo: 'Gerente Contábil',
      empresa: 'Serviços Integrados',
      texto: 'O compliance fiscal nunca foi tão simples. A Parametriz mantém tudo atualizado automaticamente, dando-nos total tranquilidade.',
      avatar: '/assets/logo-white.png',
      avaliacao: 3
    }
  ];

  private intervalosAtivos: any[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.inicializarDepoimentos();
    this.iniciarCarrosselAutomatico();
  }

  ngOnDestroy(): void {
    this.limparTodosIntervalos();
  }

  private inicializarDepoimentos(): void {
    if (this.depoimentos.length > 0) {
      this.depoimentoAtual = this.depoimentos[0];
    }
  }

  private iniciarCarrosselAutomatico(): void {
    const intervalo = setInterval(() => {
      this.proximoDepoimento();
    }, 5000);

    this.intervalosAtivos.push(intervalo);
  }

  public proximoDepoimento(): void {
    if (this.indiceDepoimentoAtual < this.depoimentos.length - 1) {
      this.indiceDepoimentoAtual++;
    } else {
      this.indiceDepoimentoAtual = 0; // Volta para o primeiro
    }

    this.atualizarDepoimentoAtual();
  }

  public depoimentoAnterior(): void {
    if (this.indiceDepoimentoAtual > 0) {
      this.indiceDepoimentoAtual--;
    } else {
      this.indiceDepoimentoAtual = this.depoimentos.length - 1; // Vai para o último
    }

    this.atualizarDepoimentoAtual();
  }

  public selecionarDepoimento(indice: number): void {
    if (indice >= 0 && indice < this.depoimentos.length) {
      this.indiceDepoimentoAtual = indice;
      this.atualizarDepoimentoAtual();
    }
  }

  private atualizarDepoimentoAtual(): void {
    this.depoimentoAtual = this.depoimentos[this.indiceDepoimentoAtual];
  }

  public obterEstrelas(numeroEstrelas: number): number[] {
    return Array(numeroEstrelas).fill(0);
  }

  private limparTodosIntervalos(): void {
    this.intervalosAtivos.forEach(intervalo => clearInterval(intervalo));
    this.intervalosAtivos = [];
  }
  public obterDepoimento(indice: number): DadosDepoimento | null {
    return this.depoimentos[indice] || null;
  }

  public obterTotalDepoimentos(): number {
    return this.depoimentos.length;
  }
  
  public navegarParaSecaoContato() {
    const elementoSecao = document.getElementById('contato');
    if (elementoSecao) {
      elementoSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

