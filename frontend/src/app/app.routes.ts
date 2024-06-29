import { Routes } from '@angular/router';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { CriarPessoasComponent } from './criar-pessoas/criar-pessoas.component';

export const routes: Routes = [
  {
    path: 'listar-pessoas',
    component: ListarPessoasComponent,
  },
  {
    path: 'criar-pessoas',
    component: CriarPessoasComponent,
  },
];
