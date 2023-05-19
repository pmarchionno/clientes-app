import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent,
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
