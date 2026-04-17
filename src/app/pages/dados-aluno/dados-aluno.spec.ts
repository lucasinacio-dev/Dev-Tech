import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAluno } from './dados-aluno';

describe('DadosAluno', () => {
  let component: DadosAluno;
  let fixture: ComponentFixture<DadosAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(DadosAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
