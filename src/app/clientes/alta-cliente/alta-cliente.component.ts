import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../clientes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  //Estas dos se conocen como propiedades
  cliente!: Cliente;
  grupos: Grupo[] = [];
  selectedFile!: File;
  
  constructor(private clientesService: ClientesService, private router: Router = new Router,) { //A esto se lo llama inyección de dependencias
    if (this.clientesService.getClientes().length <= 0) {
      this.clientesService.addCliente({
        nombre: 'Pablo',
        id: 1,
        cuit: '111',
        direccion: 'aaaa',
        grupo: 1,
        imagen: ''
      });

      this.clientesService.addCliente({
        nombre: 'Alberto',
        id: 2,
        cuit: '222',
        direccion: 'bbbb',
        grupo: 1,
        imagen: ''
      });

      this.clientesService.addCliente({
        nombre: 'José',
        id: 3,
        cuit: '333',
        direccion: 'ccc',
        grupo: 2,
        imagen: ''
      });
    }
  }

  ngOnInit(): void {
    this.cliente = this.clientesService.resetDataCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente() {
    this.clientesService.addCliente(this.cliente);
    this.cliente = this.clientesService.resetDataCliente();
    this.goBackToAltaCliente();
  }

  goBackToAltaCliente() {
    this.router.navigate(['']);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
  }

  uploadImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.cliente.imagen = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
