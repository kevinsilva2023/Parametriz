import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  servicoId = 'service_zjsn9wx';
  templateId = 'template_wzdd6w5';
  publicKey = 'kSf37NB3qvssxc0rE';

  constructor() {
    emailjs.init({ publicKey: this.publicKey })
  }

  async enviarEmail(formData: any): Promise<any> {
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.telefone,
      company: formData.empresa,
      message: formData.mensagem,
      communications: formData.comunicacoes ? 'Sim' : 'Não',
      to_email: 'contato.comercial@parametriz.com.br'
    }

      return await emailjs.send(this.servicoId, this.templateId, templateParams);
  }
}
