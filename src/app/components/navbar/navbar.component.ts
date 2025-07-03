import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public estaMenuAberto: boolean = false;
  public secaoAtiva: string = '';
  private posicaoScrollAnterior: number = 0;

  ngOnInit(): void {
    this.atualizarLinkAtivo();
  }

  public alternarMenu(): void {
    this.estaMenuAberto = !this.estaMenuAberto;
  }

  public fecharMenu(): void {
    this.estaMenuAberto = false;
  }

  public navegarParaSecao(secaoId: string): void {
    event?.preventDefault();
    this.secaoAtiva = secaoId;

    const elementoSecao = document.getElementById(secaoId);
    if (elementoSecao) {
      elementoSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.fecharMenu();
    }
  }

  private atualizarLinkAtivo(): void {
    const secoes = document.querySelectorAll('section[id]');
    const posicaoScroll = window.scrollY + 100;

    secoes.forEach(secao => {
      const el = secao as HTMLElement;
      const topo = el.offsetTop;
      const fundo = topo + el.offsetHeight;
      const id = secao.getAttribute('id');

      if (posicaoScroll >= topo && posicaoScroll <= fundo && id) {
        this.secaoAtiva = id;
      }
    });
  }

  @HostListener('window:scroll')
  aoRolarPagina(): void {
    const posicaoAtual = window.scrollY;
    this.atualizarLinkAtivo();
    this.controlarVisibilidadeNavbar(posicaoAtual);
    this.posicaoScrollAnterior = posicaoAtual;
  }

private controlarVisibilidadeNavbar(posicaoAtual: number): void {
  const navbar = document.querySelector('.menu-flutuante') as HTMLElement;
  if (!navbar) return;

  const isMobile = window.innerWidth < 768;
  const baseTranslateX = isMobile ? '0' : '-50%';

  if (posicaoAtual > this.posicaoScrollAnterior && posicaoAtual > 100) {
    navbar.style.transform = `translateX(${baseTranslateX}) translateY(-100px)`;
  } else {
    navbar.style.transform = `translateX(${baseTranslateX}) translateY(0)`;
  }
}
  @HostListener('window:resize')
  aoRedimensionarJanela(): void {
    if (window.innerWidth > 768) {
      this.fecharMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  aoClicarForaDoMenu(evento: Event): void {
    const alvo = evento.target as HTMLElement;
    const navbar = document.querySelector('.menu-flutuante');
    if (navbar && !navbar.contains(alvo) && this.estaMenuAberto) {
      this.fecharMenu();
    }
  }
}
