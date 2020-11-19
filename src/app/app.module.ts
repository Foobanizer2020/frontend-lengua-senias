import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { UsuarioComponent } from './components/autenticacion/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EstadoComponent } from './components/estado/estado.component';
import { PaisComponent } from './components/pais/pais.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent as FraseFormularioComponent } from './components/frase/formulario/formulario.component';
import { DetallesComponent as FraseDetallesComponent } from './components/frase/detalles/detalles.component';
import { ListadoComponent as FraseListadoComponent } from './components/frase/listado/listado.component';
import { FcategoriaComponent } from './components/fcategoria/fcategoria.component';
import { LenguaComponent } from './components/lengua/lengua.component';
import { IdiomaComponent } from './components/idioma/idioma.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    HomeComponent,
    EstadoComponent,
    PaisComponent,
    FraseFormularioComponent,
    FraseDetallesComponent,
    FraseListadoComponent,
    FcategoriaComponent,
    LenguaComponent,
    IdiomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
