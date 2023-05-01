import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../clientes.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  //Estas dos se conocen como propiedades
  cliente!: Cliente;
  grupos: Grupo[] = [];

  constructor(private clientesService: ClientesService){} //A esto se lo llama inyección de dependencias

  ngOnInit(): void {
      this.cliente = this.clientesService.resetDataCliente();
      this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(){
    this.clientesService.addCliente(this.cliente);
    this.cliente = this.clientesService.resetDataCliente();
  }
}
