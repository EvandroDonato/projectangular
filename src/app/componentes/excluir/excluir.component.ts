import { Component, Inject, OnInit, inject } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Route, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit{

  imputdata: any;
  funcionario!: Funcionario;

  constructor(
    private FuncionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
    
    ){}

  ngOnInit(): void {
    this.imputdata = this.data;
    this.FuncionarioService.GetFuncionario(this.imputdata.id).subscribe((data) => {
      
    })
  }
  Excluir(){
    this.FuncionarioService.ExcluirFuncionario(this.imputdata.id).subscribe((data) =>{
        this.ref.close();
        window.location.reload();
    });
  }

  Cancelar(){
    this.ref.close();
  }
}
