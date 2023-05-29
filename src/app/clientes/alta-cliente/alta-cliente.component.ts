import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente, Grupo } from '../clientes.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  //Estas dos se conocen como propiedades
  cliente!: Cliente;
  grupos: Grupo[] = [];
  myForm: FormGroup;
  cuitCliente!: String;

  constructor(
    private clientesService: ClientesService,
    private router: Router = new Router,
    private formBuilder: FormBuilder) { //A esto se lo llama inyección de dependencias
    this.myForm = formBuilder.group({
      nombre: ['', [Validators.required]],
      cuit: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(11)]],
      direccion: ['', [Validators.required]],
      grupo: ['', [Validators.required, Validators.min(1)]],
      imagen: ['']
    });
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

  public onChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.cliente.imagen = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
