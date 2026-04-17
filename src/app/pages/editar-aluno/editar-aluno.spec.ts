import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAluno } from './editar-aluno';

describe('EditarAluno', () => {
  let component: EditarAluno;
  let fixture: ComponentFixture<EditarAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
