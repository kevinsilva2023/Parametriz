import { Component } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.scss']
})
export class DuvidasComponent {
  perguntas = [
    {
      pergunta: "Quando a Reforma Tributária entra em vigor?",
      resposta: "A transição começa em 2026, com a cobrança de alíquotas simbólicas de CBS e IBS, e será concluída até 2033, quando o modelo antigo será totalmente substituído."
    },
    {
      pergunta: "Simples Nacional e MEI serão mantidos?",
      resposta: "Sim. Ambos serão mantidos na Constituição. Porém, passarão por adaptações, como a obrigatoriedade de destacar IBS e CBS nas notas fiscais e a possibilidade de optar pela tributação desses tributos fora do regime unificado."
    },
    {
      pergunta: "Qual será a alíquota final da CBS e do IBS?",
      resposta: "As alíquotas serão definidas por lei complementar. A soma total (CBS + IBS) não poderá ultrapassar o teto de 26,5%, conforme definido pela Reforma."
    },
    {
      pergunta: "Quais produtos serão tributados pelo Imposto Seletivo (IS)?",
      resposta: "Produtos prejudiciais à saúde ou ao meio ambiente, como: Bebidas alcoólicas e açucaradas, Cigarros e derivados do tabaco, Combustíveis fósseis, Veículos altamente poluentes, Apostas e jogos de azar."
    },
    {
      pergunta: "Como funcionará o Split Payment?",
      resposta: "No momento do pagamento, os valores correspondentes aos tributos (CBS e IBS) serão separados automaticamente pelo sistema financeiro e repassados diretamente ao fisco, sem passar pelo caixa da empresa vendedora."
    },
    {
      pergunta: "A CBS e o IBS vão substituir quais tributos?",
      resposta: "Sim. Eles vão unificar e substituir os seguintes impostos: CBS (federal): substitui PIS, Cofins e IPI; IBS (estadual e municipal): substitui ICMS e ISS."
    },
    {
      pergunta: "Como será feito o cálculo do crédito na CBS e IBS?",
      resposta: "O sistema será não cumulativo com crédito amplo, ou seja, todo tributo pago na cadeia anterior poderá ser creditado integralmente, sem restrições setoriais ou de destino."
    },
    {
      pergunta: "Exportações terão cobrança de IBS e CBS?",
      resposta: "Não. Exportações serão desoneradas desses tributos para manter a competitividade internacional."
    },
    {
      pergunta: "O que muda para prestadores de serviço?",
      resposta: "Os prestadores de serviços pagarão IBS e CBS, com crédito assegurado para os tomadores. Isso reduz a cumulatividade e torna o sistema mais neutro entre bens e serviços."
    },
    {
      pergunta: "Quais operações estarão isentas de IBS e CBS?",
      resposta: "As leis complementares definirão com mais precisão, mas já há previsão de isenção ou alíquota zero para: Educação, Saúde, Medicamentos, Transporte público, Alimentos da cesta básica, Exportações."
    },
    {
      pergunta: "Haverá devolução de tributos para pessoas físicas?",
      resposta: "Sim. Está previsto um sistema de devolução parcial dos tributos pagos (cashback) para pessoas físicas de baixa renda, com regras a serem definidas em lei."
    },
    {
      pergunta: "A Reforma atinge operações entre estados e municípios?",
      resposta: "Sim. O IBS terá um modelo de cobrança no destino, ou seja, o imposto será recolhido no local de consumo, e não no local de origem da mercadoria ou serviço."
    },
    {
      pergunta: "A nota fiscal precisará de adaptação com a nova legislação?",
      resposta: "Sim. Os sistemas de emissão de notas precisarão: Implementar novos campos tributários; Destacar valores de CBS, IBS e IS; Validar as regras de cálculo e alíquota; Gerar as notas de crédito quando necessário."
    },
    {
      pergunta: "Haverá regime específico para alguns setores?",
      resposta: "Sim. Setores como combustíveis, serviços financeiros, imóveis, cooperativas, planos de saúde e educação poderão ter regimes diferenciados, que serão definidos em lei complementar."
    },
    {
      pergunta: "Empresas do Simples permitirão crédito para quem compra?",
      resposta: "Sim. Compradores poderão aproveitar o crédito de IBS e CBS destacado na nota fiscal, mesmo quando o vendedor for optante pelo Simples Nacional. Isso aumenta a competitividade dessas empresas no mercado."
    }
  ];



}
