import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { EstadoComponent } from './components/estado/estado.component';
import { DetallesComponent as DetallesFraseComponent } from './components/frase/detalles/detalles.component';
import { ListadoComponent as ListadoFraseComponent } from './components/frase/listado/listado.component';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'estado', component:EstadoComponent},
  {path:'pais',component:PaisComponent},
  {path:'frase',component:ListadoFraseComponent},
  {path:'frase/:idFrase',component:DetallesFraseComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
