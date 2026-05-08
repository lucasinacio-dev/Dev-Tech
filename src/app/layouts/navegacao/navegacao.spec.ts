import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Navegacao } from './navegacao';

describe('Navegacao', () => {
  let component: Navegacao;
  let fixture: ComponentFixture<Navegacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Navegacao,
        RouterTestingModule,    // necessário para routerLink e routerLinkActive
        NoopAnimationsModule,   // evita erros de animação do Material no teste
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Navegacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the logo title', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.logo-title')?.textContent).toContain('EduTech');
  });

  it('should render 5 nav items', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const items = el.querySelectorAll('.nav-item');
    expect(items.length).toBe(6); // 5 menu + 1 sair
  });
});