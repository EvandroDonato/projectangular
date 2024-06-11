import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Funcionario } from '../../models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
//import { Funcionario } from 'src/app/models/Funcionarios';
//import { FuncionarioService } from 'src/app/services/funcionario-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar!";
  btnTitulo = "Cadastrar Funcionário!";

  
  constructor(private funcionarioService : FuncionarioService, private router : Router) {
  }

  /*
  ngOnInit(): void {
  }*/

  createFuncionario(funcionario: Funcionario){

       this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
          this.router.navigate(['/']);
       })
  }
 


}