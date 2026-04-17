import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoConfirmar } from '../../shared/botao-confirmar/botao-confirmar';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BotaoConfirmar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}