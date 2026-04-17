import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TurmaForm } from '../types/TurmaForm';
import { Observable } from 'rxjs';
import { Turma } from '../types/Turma';
import { API_CONFIG } from '../../config/API_CONFIG';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  private http = inject(HttpClient);
  private baseUrl = API_CONFIG.baseUrl + '/turmas';

  criar(form: TurmaForm): Observable<Turma> {
    return this.http.post<Turma>('${this.baseUrl}', form);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>('${this.baseUrl}/${id}');
  }

  buscarPeloId(id: number): Observable<Turma> {
    return this.http.get<Turma>('${this.baseUrl}/${id}');
  }

  buscarTodas(): Observable<Turma[]> {
    return this.http.get<Turma[]>('${this.baseUrl}');
  }
}