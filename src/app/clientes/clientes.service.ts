import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  resetDataCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cuit: '',
      direccion: '',
      grupo: 0
    };
  }
}

