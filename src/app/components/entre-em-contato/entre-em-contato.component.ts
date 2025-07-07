import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-entre-em-contato',
  templateUrl: './entre-em-contato.component.html',
  styleUrls: ['./entre-em-contato.component.scss'],
})
export class EntreEmContato implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aqui você posso fazer o envio dos dados
    }
  }
  
}