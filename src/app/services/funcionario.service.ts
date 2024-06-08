import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.apiUrl}/Funcionario/Get`
  private apiUrlCreate = `${environment.apiUrl}/Funcionario/Create`
  private apiUrlId = `${environment.apiUrl}/Funcionario`
  private apiUrUpdate = `${environment.apiUrl}/Funcionario/Update`
  private apiUrlInativa = `${environment.apiUrl}/Funcionario/Inativa`
  private apiUrlDelete = `${environment.apiUrl}/Funcionario/Delete`

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionario(id: number) : Observable<Response<Funcionario>>{
    return this.http.get<Response<Funcionario>>(`${this.apiUrlId}/${id}`);
  }

  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>>{
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrlCreate}`,funcionario);
    console.log();
    
  }

  EditarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrUpdate}`, funcionario)

  }

  InativaFuncionario(id: number) : Observable<Response<Funcionario[]>>{
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrlInativa}?id=${id}`,id);
  }

  ExcluirFuncionario(id: number) : Observable<Response<Funcionario[]>>{
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrlDelete}?id=${id}`);
  }



}
