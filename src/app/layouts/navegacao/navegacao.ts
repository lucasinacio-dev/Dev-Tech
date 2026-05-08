import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  imports: [MatSidenavModule, MatIcon, RouterModule],
  templateUrl: './navegacao.html',
  styleUrl: './navegacao.css',
})
export class Navegacao {}