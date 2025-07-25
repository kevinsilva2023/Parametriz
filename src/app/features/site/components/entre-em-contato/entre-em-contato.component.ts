import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/features/site/services/email.service';

@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
  styleUrls: ['./entre-em-contato.component.scss'],
})
export class EntreEmContato implements OnInit {
  formulario!: FormGroup;
  foiEnviado = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      empresa: ['', Validators.required],
      mensagem: ['', Validators.required],
      comunicacoes: [false],
    });
  }

  async onSubmit() {
    if (this.formulario.valid && !this.foiEnviado) {
      this.foiEnviado = true;

      try {
        await this.emailService.enviarEmail(this.formulario.value);
        this.snackBar.open(
          'Em breve, entraremos em contato!',
          '',
          {
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['snackbar-sucesso']
          }
        );
        this.formulario.reset();

      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        await this.emailService.enviarEmail(this.formulario.value);
        this.snackBar.open(
          'Erro ao enviar! Verifique o log.',
          '',
          {
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['snackbar-sucesso'] 
          }
        );

      } finally {
        this.foiEnviado = false;
      }
    }
  }


}