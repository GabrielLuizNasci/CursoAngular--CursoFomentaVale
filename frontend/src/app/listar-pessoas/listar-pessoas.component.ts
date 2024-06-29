import { Component, OnInit } from '@angular/core';
import Pessoa from '../../entities/Pessoa';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pessoas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-pessoas.component.html',
  styleUrl: './listar-pessoas.component.scss'
})
export class ListarPessoasComponent implements OnInit{
  pessoas: Pessoa[] = []

  constructor(private httpCliente: HttpClient) {}

  ngOnInit(): void {
    this.httpCliente.get('http://localhost:3333/pessoas').subscribe({
      next: (resultado) => {
        this.pessoas = resultado as Pessoa[]
      },
      error: () => {

      }
    })
  }
}
