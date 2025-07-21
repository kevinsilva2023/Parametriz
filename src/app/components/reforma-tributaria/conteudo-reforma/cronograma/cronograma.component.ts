import { Component } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details: string[];
  highlight?: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: '2026',
      title: 'Ano-Teste',
      description: '',
      details: [
        'Início da transição com alíquotas simbólicas',
        'CBS: 0,9% | IBS: 0,1%',
        'Sem recolhimento efetivo (apenas simulação)'
      ],
      highlight: 'Importante: Valores devem ser destacados nas notas fiscais, mas não serão pagos ao governo. Porém, se não cumprir as obrigações acessórias, passa a ser obrigatório o recolhimento.',
      position: 'right'
    },
    {
      year: '2027',
      title: 'Início da Cobrança',
      description: '',
      details: [
        'CBS entra em vigor e substitui PIS/COFINS',
        'IS (Imposto Seletivo) começa a ser cobrado',
        'IPI extinto, exceto para produtos da Zona Franca de Manaus',
        'IBS permanece com alíquota simbólica'
      ],
      position: 'left'
    },
    {
      year: '2029-2032',
      title: 'Transição Gradual do IBS',
      description: 'IBS começa a substituir ICMS e ISS de forma escalonada:',
      details: [
        '2029: 10% via IBS • 90% ainda pelo ICMS/ISS',
        '2030: 20% via IBS • 80% pelo ICMS/ISS',
        '2031: 30% via IBS • 70% pelo ICMS/ISS',
        '2032: 40% via IBS • 60% pelo ICMS/ISS'
      ],
      highlight: 'Redução proporcional do ICMS e ISS',
      position: 'right'
    },
    {
      year: '2033',
      title: 'Implantação Total',
      description: '',
      details: [
        'Novo sistema plenamente implantado:'
      ],
      position: 'left'
    }
  ];
}
