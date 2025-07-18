import { Component } from '@angular/core';

@Component({
  selector: 'app-perguntas-respostas',
  templateUrl: './perguntas-respostas.component.html',
  styleUrls: ['./perguntas-respostas.component.scss']
})
export class PerguntasRespostasComponent {
  faqAtivo = 0;

  alternarFaq(faq: number) {
    this.faqAtivo = faq
    return this.faqAtivo;
  }
}
