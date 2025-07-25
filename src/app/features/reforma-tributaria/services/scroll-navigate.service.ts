import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface MenuItem {
  id: string;
  label: string;
  
  icon?: string;
  
  route?: string;
  component?: any;
  active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollNavigateService {
  private menuItemsSubject = new BehaviorSubject<MenuItem[]>([]);
  private activeItemSubject = new BehaviorSubject<string>('introducao');

  public menuItems$ = this.menuItemsSubject.asObservable();
  public activeItem$ = this.activeItemSubject.asObservable();

  // Novo observable que retorna o label da seção ativa
  public activeItemLabel$ = this.activeItem$.pipe(
    map(activeId => {
      const item = this.menuItemsSubject.value.find(i => i.id === activeId);
      return item ? item.label : '';
    })
  );

  constructor() {
    this.initializeMenuItems();
    this.setupScrollListener();
  }

  private initializeMenuItems(): void {
    const defaultItems: MenuItem[] = [
      { 
        id: 'introducao', 
        label: 'O que é Reforma Tributária?', 
        icon: 'circle-info', 
        route: '#introducao',
        active: 
        true },
      { 
        id: 'cronograma', 
        label: 'Cronograma (2026 - 2033)', 
        icon: 'calendar-week', 
        route: '#cronograma' 
      },
      // { 
      //   id: 'fato-gerador', 
      //   label: 'Fato Gerador/ Incidência', 
      //   icon: 'gavel', 
      //   route: '#fato-gerador' 
      // },
      { 
        id: 'calculo', 
        label: 'Base X Alíquota', 
        icon: 'calculator', 
        route: '#calculo' 
      },
      { 
        id: 'credito', 
        label: 'Apropriação de Créditos', 
        icon: 'hand-holding-dollar', 
        route: '#credito' 
      },
      { 
        id: 'recolhimento', 
        label: 'Recolhimentos', 
        icon: 'arrow-right-arrow-left', 
        route: '#recolhimento' 
      },
      { 
        id: 'restituicao-cashback', 
        label: 'Restituição e Cashback', 
        icon: 'arrow-rotate-left', 
        route: '#restituicao-cashback' 
      },
      { 
        id: 'split-payment', 
        label: 'Split Payment', 
        icon: 'brazilian-real-sign', 
        route: '#split-payment' 
      },
      { 
        id: 'ipi', 
        label: 'IPI vai acabar?', 
        icon: 'industry', 
        route: '#ipi' 
      },
      { 
        id: 'simples-nacional', 
        label: 'Simples Nacional', 
        icon: 'building', 
        route: '#simples-nacional' 
      },
      { 
        id: 'imposto-seletivo', 
        label: 'Imposto Seletivo', 
        icon: 'triangle-exclamation', 
        route: '#imposto-seletivo' 
      },
      { 
        id: 'nota-fiscal', 
        label: 'Notas Fiscais', 
        icon: 'file-invoice', 
        route: '#nota-fiscal' 
      },
      { 
        id: 'duvidas', 
        label: 'Duvidas Frequentes', 
        icon: 'circle-question', 
        route: '#duvidas' 
      },
      { 
        id: 'base-legal', 
        label: 'Embasamento Legal', 
        icon: 'scale-balanced', 
        route: '#base-legal' 
      },
    ];

    this.menuItemsSubject.next(defaultItems);
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => this.updateActiveSection());
  }

  private updateActiveSection(): void {
    const sections = this.menuItemsSubject.value.map(item => item.id);
    const scrollPosition = window.scrollY + 200;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        this.setActiveItem(sections[i]);
        break;
      }
    }
  }

  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      this.setActiveItem(sectionId);
    }
  }
  public setActiveItem(itemId: string): void {
    const updatedItems = this.menuItemsSubject.value.map(item => ({
      ...item,
      active: item.id === itemId
    }));

    this.menuItemsSubject.next(updatedItems);
    this.activeItemSubject.next(itemId);

    // Garantir que o item ativo fique visível no menu
    setTimeout(() => {
      const menuElement = document.querySelector(`[data-menu-id="${itemId}"]`);
      if (menuElement) {
        menuElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',  // mantém a posição próxima
          inline: 'center'   // útil se for horizontal
        });
      }
    }, 50);
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItemsSubject.value;
  }

  public getActiveItem(): string {
    return this.activeItemSubject.value;
  }
}
