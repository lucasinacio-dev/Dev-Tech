import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  // Controle de visibilidade das senhas
  showLoginPass = false;
  showCadPass   = false;

  loginData = {
    email: '',
    senha: ''
  };

  cadastroData = {
    nome: '',
    matricula: '',
    senha: ''
  };

  entrar() {
    if (!this.loginData.email || !this.loginData.senha) {
      alert('Preencha todos os campos de login!');
      return;
    }

    // TODO: integrar com serviço de autenticação
    alert('Login realizado com sucesso!');
  }

  cadastrar() {
    if (!this.cadastroData.nome || !this.cadastroData.matricula || !this.cadastroData.senha) {
      alert('Preencha todos os campos de cadastro!');
      return;
    }

    // TODO: integrar com serviço de cadastro
    alert('Cadastro realizado com sucesso!');
  }
}