import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cliente, Grupo } from '../clientes.model';
import { ClientesService } from '../clientes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  //Estas dos se conocen como propiedades
  clientes: Cliente[] = [];
  clientesData: Cliente[] = [];
  private clienteSubscription: Subscription = new Subscription;
  grupos: Grupo[] = [];
  dataInputSearch = '';
  ordeByName = 'ASC';

  constructor(private clientesService: ClientesService) { }//A esto se lo llama inyección de dependencias

  ngOnInit() {
    this.clienteSubscription = this.clientesService.clientesSubject.subscribe(
      (clientes: Cliente[]) => {
        this.clientes = clientes;
        this.clientesData = clientes;
      }
      
    );
    this.clientes = this.clientesService.getClientes();
    this.clientesData = this.clientes;
    this.updateCliente();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['clientes'] && this.clientes) {
      this.clientesData = this.clientes;
      this.updateCliente();
      this.setOrderByName();
    }
  }

  ngOnDestroy() {
    if (this.clienteSubscription) {
      this.clienteSubscription.unsubscribe();
    }
  }
  
  public updateCliente() {
    this.clientes = this.clientesService.getClientes();
    this.clientesData = this.clientes;
    
    if (this.ordeByName == 'DESC') {
      this.setOrderDesc()
    } else {
      this.setOrder()
    };
  }

  public delCliente(cliente: any) {
    let index = this.clientes.indexOf(cliente);
    this.clientes.splice(index, 1);
    this.clientesData = this.clientes;
    this.updateCliente();
  }

  public searchData() {
    const clientesFilter: Cliente[] = [];
    this.clientes.forEach(el => {
      if (el.nombre.toLocaleLowerCase().includes(this.dataInputSearch.toLocaleLowerCase())) {
        clientesFilter.push(el);
      }else{
        //No lo tomamos en cuenta
      }
    })
    this.clientesData = clientesFilter;
  }

  public setOrder() {
    this.clientesData = this.clientesData.sort((a: Cliente, b: Cliente) => (a.nombre > b.nombre) ? 1 : -1)
  }

  public setOrderDesc() {
    this.clientesData = this.clientesData.sort((a: Cliente, b: Cliente) => (a.nombre > b.nombre) ? -1 : 1)
  }

  public setOrderByName() {
    if (this.ordeByName == 'DESC') {
      this.setOrderDesc()
      this.ordeByName = 'ASC';
    } else {
      this.setOrder()
      this.ordeByName = 'DESC';
    }
  }

}
