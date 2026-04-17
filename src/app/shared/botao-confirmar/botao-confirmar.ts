import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-confirmar',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './botao-confirmar.html',
  styleUrl: './botao-confirmar.css',
})
export class BotaoConfirmar {

  @Input() texto: string = "Confirmar";
  @Input() icone: string = "Check";
}