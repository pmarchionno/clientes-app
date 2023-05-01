import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  //Estas dos se conocen como propiedades
  clientes!: Cliente[];
  grupos: Grupo[] = [];
  
  constructor(private clientesService: ClientesService) { }//A esto se lo llama inyección de dependencias

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}
