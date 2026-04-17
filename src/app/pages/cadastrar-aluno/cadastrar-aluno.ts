import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotaoConfirmar } from '../../shared/botao-confirmar/botao-confirmar';

@Component({
  selector: 'app-cadastrar-aluno',
  imports: [FormsModule, BotaoConfirmar],
  templateUrl: './cadastrar-aluno.html',
  styleUrl: './cadastrar-aluno.css',
})
export class CadastrarAluno {
  aluno = {
    nomeCompleto: '',
    turma: '',
    anoLetivo: ''
  };
}