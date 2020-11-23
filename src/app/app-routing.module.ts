import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { EstadoComponent } from './components/estado/estado.component';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';
import {FcategoriaComponent} from './components/fcategoria/fcategoria.component'
import { DetallesComponent as DetallesSeniaComponent} from './components/senia/detalles/detalles.component';
import { ListadoComponent as ListadoSeniaComponent } from './components/senia/listado/listado.component';
import { CategoriaComponent } from './components/categoria/categoria.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'estado', component:EstadoComponent},
  {path: 'pais',component:PaisComponent},
  {path:'fcategoria', component:FcategoriaComponent},
  {path:'senia/:idSenia', component:DetallesSeniaComponent},
  {path:'senia',component:ListadoSeniaComponent},
  {path: 'categoria', component:CategoriaComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
