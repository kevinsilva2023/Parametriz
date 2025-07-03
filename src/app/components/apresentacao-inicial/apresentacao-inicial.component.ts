import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Interface para as estatísticas de credibilidade da empresa
 * Define os tipos de dados para os contadores animados
 */
interface EstatisticasCredibilidade {
  empresasAtendidas: number;
  precisao: number;
  reducaoTempo: number;
}

/**
 * Interface para as métricas do sistema/dashboard
 * Define os dados exibidos no preview do dashboard
 */
interface MetricasSistema {
  contasConfiguradas: number;
  uptime: number;
}

/**
 * Componente de Apresentação Inicial
 * 
 * Este é o primeiro componente que o usuário vê ao acessar o site.
 * Responsável por:
 * - Apresentar a empresa e seus serviços
 * - Exibir estatísticas de credibilidade com animações
 * - Mostrar preview do sistema/dashboard
 * - Fornecer call-to-actions principais
 * - Criar o primeiro impacto visual positivo
 */
@Component({
  selector: 'app-apresentacao-inicial',
  templateUrl: './apresentacao-inicial.component.html',
  styleUrls: ['./apresentacao-inicial.component.scss']
})
export class ApresentacaoInicialComponent implements OnInit, OnDestroy {

  /**
   * Dados das estatísticas da empresa
   * Valores finais que serão alcançados pelos contadores animados
   */
  public dadosEstatisticas: EstatisticasCredibilidade = {
    empresasAtendidas: 500,
    precisao: 98,
    reducaoTempo: 75
  };

  /**
   * Métricas do sistema para exibição no dashboard
   * Dados que demonstram o funcionamento do produto
   */
  public metricasSistema: MetricasSistema = {
    contasConfiguradas: 1247,
    uptime: 99.8
  };

  /**
   * Dados para o gráfico de barras animado
   * Array com as alturas das barras em porcentagem
   */
  public dadosGraficoBarras: number[] = [60, 80, 45, 90, 70];

  /**
   * Valores atuais dos contadores (começam em 0 e sobem até o valor final)
   */
  public contadorEmpresasAtendidas: number = 0;
  public contadorPrecisao: number = 0;
  public contadorReducaoTempo: number = 0;

  /**
   * Controla se as animações já foram iniciadas
   * Evita que as animações sejam executadas múltiplas vezes
   */
  private animacoesJaIniciadas: boolean = false;

  /**
   * Array que armazena os intervalos ativos
   * Necessário para limpeza quando o componente for destruído
   */
  private intervalosAtivos: any[] = [];

  constructor() { }

  /**
   * Método executado quando o componente é inicializado
   * Configura os observadores e prepara as animações
   */
  ngOnInit(): void {
    this.configurarObservadorVisibilidade();
  }

  /**
   * Método executado quando o componente é destruído
   * Limpa intervalos e observadores para evitar vazamentos de memória
   */
  ngOnDestroy(): void {
    this.limparTodosIntervalos();
  }

  /**
   * Configura o observador de interseção para detectar visibilidade
   * 
   * O Intersection Observer monitora quando a seção fica visível na tela
   * e dispara as animações apenas nesse momento, melhorando a performance
   */
  private configurarObservadorVisibilidade(): void {
    const opcoesObservador = {
      threshold: 0.5, // Dispara quando 50% da seção está visível
      rootMargin: '0px 0px -50px 0px' // Margem para ajustar o ponto de disparo
    };

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting && !this.animacoesJaIniciadas) {
          this.iniciarTodasAnimacoes();
          this.animacoesJaIniciadas = true;
        }
      });
    }, opcoesObservador);

    // Observa a seção de apresentação inicial
    const secaoApresentacao = document.getElementById('home');
    if (secaoApresentacao) {
      observador.observe(secaoApresentacao);
    }
  }

  /**
   * Inicia todas as animações da seção
   * 
   * Coordena o início das animações dos contadores para criar
   * um efeito visual atrativo e sequencial
   */
  private iniciarTodasAnimacoes(): void {
    // Inicia animação do contador de empresas atendidas
    this.animarContadorNumerico(
      0, 
      this.dadosEstatisticas.empresasAtendidas, 
      2000, 
      (valorAtual) => this.contadorEmpresasAtendidas = valorAtual
    );

    // Inicia animação do contador de precisão (com delay)
    setTimeout(() => {
      this.animarContadorNumerico(
        0, 
        this.dadosEstatisticas.precisao, 
        2500, 
        (valorAtual) => this.contadorPrecisao = valorAtual
      );
    }, 300);

    // Inicia animação do contador de redução de tempo (com delay maior)
    setTimeout(() => {
      this.animarContadorNumerico(
        0, 
        this.dadosEstatisticas.reducaoTempo, 
        3000, 
        (valorAtual) => this.contadorReducaoTempo = valorAtual
      );
    }, 600);
  }

  /**
   * Anima um contador numérico de um valor inicial até um valor final
   * 
   * @param valorInicial - Número de onde a animação começa
   * @param valorFinal - Número onde a animação termina
   * @param duracaoAnimacao - Tempo total da animação em milissegundos
   * @param funcaoCallback - Função chamada a cada atualização do valor
   */
  private animarContadorNumerico(
    valorInicial: number, 
    valorFinal: number, 
    duracaoAnimacao: number, 
    funcaoCallback: (valor: number) => void
  ): void {
    const incrementoPorFrame = valorFinal / (duracaoAnimacao / 16); // 60 FPS
    let valorAtual = valorInicial;

    const intervaloAnimacao = setInterval(() => {
      valorAtual += incrementoPorFrame;
      
      // Verifica se chegou ao valor final
      if (valorAtual >= valorFinal) {
        valorAtual = valorFinal;
        clearInterval(intervaloAnimacao);
        this.removerIntervaloDoArray(intervaloAnimacao);
      }
      
      // Atualiza o valor na tela
      funcaoCallback(Math.floor(valorAtual));
    }, 16); // ~60 FPS

    // Adiciona o intervalo ao array para controle
    this.intervalosAtivos.push(intervaloAnimacao);
  }

  /**
   * Remove um intervalo específico do array de intervalos ativos
   * 
   * @param intervalo - Intervalo a ser removido do controle
   */
  private removerIntervaloDoArray(intervalo: any): void {
    const indiceIntervalo = this.intervalosAtivos.indexOf(intervalo);
    if (indiceIntervalo > -1) {
      this.intervalosAtivos.splice(indiceIntervalo, 1);
    }
  }

  /**
   * Limpa todos os intervalos ativos
   * 
   * Método importante para evitar vazamentos de memória
   * quando o componente é destruído
   */
  private limparTodosIntervalos(): void {
    this.intervalosAtivos.forEach(intervalo => clearInterval(intervalo));
    this.intervalosAtivos = [];
  }

  /**
   * Navega suavemente para a seção de contato
   * 
   * Chamado quando o usuário clica no botão "Começar Agora"
   * Realiza scroll suave até a seção de contato
   */
  public navegarParaContato(): void {
    const secaoContato = document.getElementById('contact');
    if (secaoContato) {
      secaoContato.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Abre a demonstração do produto
   * 
   * Chamado quando o usuário clica no botão "Ver Demonstração"
   * Pode abrir um modal, nova página ou vídeo demonstrativo
   */
  public abrirDemonstracao(): void {
    // Implementação futura: pode ser um modal, vídeo ou nova página
    console.log('Abrindo demonstração do produto...');
    
    // Opções de implementação:
    // 1. Abrir em nova aba: window.open('https://demo.parametriz.com', '_blank');
    // 2. Mostrar modal: this.exibirModalDemonstracao();
    // 3. Reproduzir vídeo: this.reproduzirVideoDemonstracao();
    
    this.exibirModalDemonstracao();
  }

  /**
   * Exibe modal com demonstração do produto
   * 
   * Implementação placeholder que pode ser expandida
   * para incluir vídeos, imagens ou tour interativo
   */
  private exibirModalDemonstracao(): void {
    // Implementação futura do modal de demonstração
    alert('Demonstração em desenvolvimento. Entre em contato para agendar uma apresentação personalizada.');
  }

  /**
   * Rola suavemente para a próxima seção (serviços)
   * 
   * Chamado quando o usuário clica no indicador de scroll
   * Melhora a experiência de navegação na página
   */
  public rolarParaProximaSecao(): void {
    const proximaSecao = document.getElementById('services');
    if (proximaSecao) {
      proximaSecao.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  /**
   * Atualiza as métricas do sistema em tempo real
   * 
   * Método útil para quando houver integração com APIs
   * que fornecem dados atualizados do sistema
   * 
   * @param novasMetricas - Objeto com as novas métricas a serem exibidas
   */
  public atualizarMetricasSistema(novasMetricas: Partial<MetricasSistema>): void {
    this.metricasSistema = { ...this.metricasSistema, ...novasMetricas };
  }

  /**
   * Atualiza os dados do gráfico de barras
   * 
   * Permite modificar dinamicamente as barras do gráfico
   * para refletir dados atualizados
   * 
   * @param novosDadosGrafico - Array com os novos valores das barras
   */
  public atualizarDadosGrafico(novosDadosGrafico: number[]): void {
    this.dadosGraficoBarras = [...novosDadosGrafico];
  }

  /**
   * Reinicia as animações dos contadores
   * 
   * Útil para demonstrações ou quando o usuário
   * quiser ver as animações novamente
   */
  public reiniciarAnimacoes(): void {
    // Limpa animações atuais
    this.limparTodosIntervalos();
    
    // Reseta contadores
    this.contadorEmpresasAtendidas = 0;
    this.contadorPrecisao = 0;
    this.contadorReducaoTempo = 0;
    
    // Permite que as animações sejam iniciadas novamente
    this.animacoesJaIniciadas = false;
    
    // Inicia as animações
    this.iniciarTodasAnimacoes();
  }
}

