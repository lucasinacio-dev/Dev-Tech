import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTurma } from './editar-turma';

describe('EditarTurma', () => {
  let component: EditarTurma;
  let fixture: ComponentFixture<EditarTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
