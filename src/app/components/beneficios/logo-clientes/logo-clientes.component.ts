import { Component, OnInit } from '@angular/core';

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  alt?: string;
}

@Component({
  selector: 'app-logo-clientes',
  templateUrl: './logo-clientes.component.html',
  styleUrls: ['./logo-clientes.component.scss']
})
export class LogoClientesComponent implements OnInit {
  logos: ClientLogo[] = [
    {
      id: 'microsoft',
      name: 'Microsoft',
      logoUrl: 'https://logo.clearbit.com/microsoft.com',
      alt: 'Logo da Microsoft'
    },
    {
      id: 'google',
      name: 'Google',
      logoUrl: 'https://logo.clearbit.com/google.com',
      alt: 'Logo do Google'
    },
    {
      id: 'amazon',
      name: 'Amazon',
      logoUrl: 'https://logo.clearbit.com/amazon.com',
      alt: 'Logo da Amazon'
    },
    {
      id: 'apple',
      name: 'Apple',
      logoUrl: 'https://logo.clearbit.com/apple.com',
      alt: 'Logo da Apple'
    },
    {
      id: 'netflix',
      name: 'Netflix',
      logoUrl: 'https://logo.clearbit.com/netflix.com',
      alt: 'Logo da Netflix'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      logoUrl: 'https://logo.clearbit.com/spotify.com',
      alt: 'Logo do Spotify'
    },
    {
      id: 'adobe',
      name: 'Adobe',
      logoUrl: 'https://logo.clearbit.com/adobe.com',
      alt: 'Logo da Adobe'
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      logoUrl: 'https://logo.clearbit.com/salesforce.com',
      alt: 'Logo da Salesforce'
    },
    {
      id: 'uber',
      name: 'Uber',
      logoUrl: 'https://logo.clearbit.com/uber.com',
      alt: 'Logo da Uber'
    },
    {
      id: 'airbnb',
      name: 'Airbnb',
      logoUrl: 'https://logo.clearbit.com/airbnb.com',
      alt: 'Logo do Airbnb'
    }
  ];

  // Duplicamos os logos para criar o efeito infinito
  duplicatedLogos: ClientLogo[] = [];

  ngOnInit(): void {
    this.setupCarousel();
  }

  private setupCarousel(): void {
    // Duplicamos os logos para garantir o loop infinito suave
    this.duplicatedLogos = [...this.logos, ...this.logos];
  }

  onImageError(event: any): void {
    // Fallback para imagens que não carregam
    event.target.style.display = 'none';
  }

  onImageLoad(event: any): void {
    // Garante que a imagem seja exibida quando carregada
    event.target.style.display = 'block';
  }

  trackByLogoId(index: number, logo: ClientLogo): string {
    return `${logo.id}-${index}`;
  }
}

