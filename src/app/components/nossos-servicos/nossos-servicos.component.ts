import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-nossos-servicos',
  templateUrl: './nossos-servicos.component.html',
  styleUrls: ['./nossos-servicos.component.scss']
})
export class NossosServicosComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  modalAbertaId: string | null = null;

  dadosServicos = [
    {
      id: 'parametrizacao',
      titulo: 'Parametrização de Sistemas',
      descricao: 'Configuração completa e personalizada de sistemas contábeis, adequando planos de contas e regras fiscais às necessidades específicas da sua empresa.',
      descricaoExpandida: 'Nossa equipe especializada realiza a configuração completa de sistemas contábeis, desde a estruturação do plano de contas até a implementação de regras fiscais complexas. Garantimos que seu sistema esteja perfeitamente alinhado com as necessidades específicas do seu negócio e em conformidade com a legislação vigente.',
      caracteristicas: ['Plano de Contas', 'Regras Fiscais', 'Integração ERP'],
      beneficios: [
        'Redução de 75% no tempo de configuração',
        'Eliminação de erros manuais de parametrização',
        'Conformidade total com legislação fiscal',
        'Integração perfeita com sistemas existentes',
        'Suporte técnico especializado contínuo'
      ],
      etapasProcesso: [
        'Análise detalhada do sistema atual',
        'Mapeamento de necessidades específicas',
        'Configuração personalizada do sistema',
        'Testes rigorosos de funcionamento',
        'Treinamento da equipe e go-live'
      ],
      icone: 'fas fa-cogs'
    },
    {
      id: 'consultoria',
      titulo: 'Consultoria Especializada',
      descricao: 'Orientação estratégica com profissionais experientes para otimizar processos e garantir compliance fiscal e contábil.',
      descricaoExpandida: 'Nossos consultores especializados oferecem orientação estratégica personalizada para otimizar seus processos contábeis e fiscais. Com vasta experiência no mercado, nossa equipe identifica oportunidades de melhoria e implementa soluções que garantem eficiência operacional e conformidade regulatória.',
      caracteristicas: ['Análise Técnica', 'Treinamento', 'Suporte 24/7'],
      beneficios: [
        'Otimização de processos contábeis',
        'Redução de riscos fiscais e regulatórios',
        'Melhoria na eficiência operacional',
        'Capacitação contínua da equipe',
        'Suporte especializado quando necessário'
      ],
      etapasProcesso: [
        'Diagnóstico completo dos processos atuais',
        'Identificação de oportunidades de melhoria',
        'Desenvolvimento de plano de ação personalizado',
        'Implementação das melhorias propostas',
        'Monitoramento e ajustes contínuos'
      ],
      icone: 'fas fa-user-tie'
    },
    {
      id: 'automacao',
      titulo: 'Automação Inteligente',
      descricao: 'Implementação de soluções automatizadas que reduzem erros manuais e aceleram processos contábeis e fiscais.',
      descricaoExpandida: 'Utilizamos tecnologias de ponta, incluindo inteligência artificial e machine learning, para automatizar processos contábeis repetitivos e propensos a erros. Nossas soluções inteligentes aprendem com os padrões do seu negócio e se adaptam continuamente para maximizar a eficiência.',
      caracteristicas: ['IA Contábil', 'Workflows', 'Relatórios'],
      beneficios: [
        'Redução de 90% em erros manuais',
        'Aceleração de processos em até 80%',
        'Relatórios automáticos e precisos',
        'Workflows inteligentes e adaptativos',
        'Economia significativa de tempo e recursos'
      ],
      etapasProcesso: [
        'Mapeamento de processos para automação',
        'Desenvolvimento de soluções personalizadas',
        'Implementação gradual das automações',
        'Treinamento em novas ferramentas',
        'Monitoramento e otimização contínua'
      ],
      icone: 'fas fa-robot'
    },
    {
      id: 'compliance',
      titulo: 'Compliance Fiscal e Tributário',
      descricao: 'Garantia de conformidade com a legislação fiscal através de auditorias, cruzamentos eletrônicos e orientações atualizadas.',
      descricaoExpandida: 'Oferecemos um serviço completo de compliance fiscal e tributário, que inclui auditorias preventivas, análise de obrigações acessórias, cruzamentos eletrônicos de dados e identificação de possíveis inconsistências. Nosso objetivo é manter sua empresa em total conformidade com as normas legais, evitando autuações e prejuízos financeiros.',
      caracteristicas: ['Auditoria Fiscal', 'Cruzamento de Dados', 'Análise SPED'],
      beneficios: [
        'Redução de riscos de autuação fiscal',
        'Identificação preventiva de inconsistências',
        'Cumprimento rigoroso das obrigações acessórias',
        'Economia com multas e juros',
        'Atualização constante com base na legislação vigente'
      ],
      etapasProcesso: [
        'Levantamento das obrigações fiscais da empresa',
        'Execução de auditoria documental e digital',
        'Análise de cruzamentos eletrônicos (SPED, DCTF, EFD)',
        'Relatório com inconsistências e plano de ação',
        'Acompanhamento e retificação quando necessário'
      ],
      icone: 'fas fa-balance-scale'
    }

  ]

  abrirModal(id: string) {
    const dados = this.dadosServicos.find(servicos => servicos.id === id);

    this.modalAbertaId = id;

    const modalRef = this.modalService.open(ModalComponent, {
      size: 'xl',
      centered: true,
      scrollable: true,
    });
    modalRef.componentInstance.dados = dados;

    // Bloqueia o scroll de fundo
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Ajuste da modal
    setTimeout(() => {
      // Aguarda a renderização da modal
      const modalWindow = document.querySelector('ngb-modal-window') as HTMLElement;

      if (modalWindow) {
        const scrollable = modalWindow.querySelector('.component-host-scrollable') as HTMLElement;

        if (scrollable) {
          scrollable.style.overflowX = 'auto';
          scrollable.style.overflowY = 'hidden';

          // Também tenta forçar scroll para o topo
          scrollable.scrollTo({ top: 0, behavior: 'auto' });

          // Se houver um container interno com scroll (tipo modal-body)
          const innerScrollable = scrollable.querySelector('.modal-body');
          if (innerScrollable) {
            (innerScrollable as HTMLElement).scrollTo({ top: 0, behavior: 'auto' });
          }
        }
      }
    });

    // Libera o scroll de fundo ao fechar a modal
    modalRef.result.finally(() => {
      this.modalAbertaId = null;
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    });
  }



}
