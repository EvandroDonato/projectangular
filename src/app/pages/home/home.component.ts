import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    funcionarios: Funcionario[] = [];
    funcionarioGeral: Funcionario[]=[];
    conlunas = ['Situacao','Nome','SobreNome','Departamento','Acoes','Excluir']
  
    constructor(private funcionarioService: FuncionarioService,public dialog: MatDialog){
   
  }

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data =>{
      const dados = data.dados;
      
      dados.map((item) => {
       
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
      })

      this.funcionarios = data.dados;
      this.funcionarioGeral = data.dados;
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.funcionarios = this.funcionarioGeral.filter(funcionario =>{
      return funcionario.nome.toLowerCase().includes(value)
    })
  }

  OpenDialog(id: number){

    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id

      }
    });
  }
}
