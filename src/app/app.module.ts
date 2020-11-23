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
import { FcategoriaComponent } from './components/fcategoria/fcategoria.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DetallesComponent } from './components/senia/detalles/detalles.component';
import { FormularioComponent } from './components/senia/formulario/formulario.component';
import { ListadoComponent } from './components/senia/listado/listado.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    HomeComponent,
    EstadoComponent,
    PaisComponent,
    FcategoriaComponent,
    FooterComponent,
    HeaderComponent,
    DetallesComponent,
    FormularioComponent,
    ListadoComponent,
    CategoriaComponent
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
