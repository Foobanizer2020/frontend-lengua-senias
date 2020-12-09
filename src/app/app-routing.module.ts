import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { EstadoComponent } from './components/estado/estado.component';
import { DetallesComponent as DetallesFraseComponent } from './components/frase/detalles/detalles.component';
import { ListadoComponent as ListadoFraseComponent } from './components/frase/listado/listado.component';
import { DetallesComponent as DetallesPalabraComponent } from './components/palabra/detalles/detalles.component';
import { ListadoComponent as ListadoPalabraComponent } from './components/palabra/listado/listado.component';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';
import { IdiomaComponent } from './components/idioma/idioma.component';
import {FcategoriaComponent} from './components/fcategoria/fcategoria.component'
import { DetallesComponent as DetallesSeniaComponent} from './components/senia/detalles/detalles.component';
import { ListadoComponent as ListadoSeniaComponent } from './components/senia/listado/listado.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LenguaComponent } from './components/lengua/lengua.component';
import { RecuperacionComponent } from './components/autenticacion/recuperacion/recuperacion.component';
import { IndiceComponent as IndiceFraseComponent} from './components/frase/indice/indice.component';
import { IndiceComponent as IndicePalabraComponent} from './components/palabra/indice/indice.component';
import { ErrorComponent } from './components/error/error.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { LoggedService } from './_services/guards/logged.service';
import { AdminService } from './_services/guards/admin.service';
import { ListadoComponent as GeneralFrasesListadoComponent } from './components/general-frases/listado/listado.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'login', component:LoginComponent},
  {path:'recuperacion', component:RecuperacionComponent},
  {path:'estado', component:EstadoComponent},
  {path:'pais',component:PaisComponent, canActivate:[LoggedService, AdminService]},
  {path:'general-frases',component:GeneralFrasesListadoComponent},
  {path:'frase',component:ListadoFraseComponent},
  {path:'frase/:idFrase',component:DetallesFraseComponent},
  {path:'indice_frases',component:IndiceFraseComponent},
  {path:'indice_palabras',component:IndicePalabraComponent},
  {path:'palabra',component:ListadoPalabraComponent},
  {path:'palabra/:idPalabra',component:DetallesPalabraComponent},
  {path:'fcategoria', component:FcategoriaComponent},
  {path:'senia/:idSenia', component:DetallesSeniaComponent},
  {path:'senia',component:ListadoSeniaComponent},
  {path:'categoria', component:CategoriaComponent},
  {path:'idioma', component:IdiomaComponent},
  {path:'lengua', component:LenguaComponent},
  {path:'error', component:ErrorComponent},
  {path:'favoritos', component:FavoritosComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', redirectTo:'/error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
