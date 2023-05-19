import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

const routes: Routes = [
  { path: '', component: ListadoClientesComponent },
  { path: 'altaCliente', component: AltaClienteComponent },
  { path: 'listadoClientes', component: ListadoClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
