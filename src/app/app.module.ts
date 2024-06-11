import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { FuncionarioFormComponent } from './componentes/funcionario-form/funcionario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/* Angular Material*/

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {Component} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ExcluirComponent } from './componentes/excluir/excluir.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';

//PO-UI
import { PoButtonModule } from '@po-ui/ng-components';
import { PoButtonGroupModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';



/*PO UI
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
*/


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    FuncionarioFormComponent,
    EditarComponent,
    DetalhesComponent,
    ExcluirComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoButtonModule ,
    PoButtonGroupModule,
    PoFieldModule,
    FormsModule,
    PoContainerModule,
    PoTableModule,
    PoDynamicModule,
    
    
    /*RouterModule.forRoot([]),

    /*PoModule,*/
   

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
