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

import { FormularioComponent as PalabraFormularioComponent } from './components/palabra/formulario/formulario.component';
import { DetallesComponent as PalabraDetallesComponent } from './components/palabra/detalles/detalles.component';
import { ListadoComponent as PalabraListadoComponent } from './components/palabra/listado/listado.component';

import { FcategoriaComponent } from './components/fcategoria/fcategoria.component';
import { LenguaComponent } from './components/lengua/lengua.component';
import { IdiomaComponent } from './components/idioma/idioma.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DetallesComponent } from './components/senia/detalles/detalles.component';
import { FormularioComponent } from './components/senia/formulario/formulario.component';
import { ListadoComponent } from './components/senia/listado/listado.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RecuperacionComponent } from './components/autenticacion/recuperacion/recuperacion.component';
import { IndiceComponent } from './components/frase/indice/indice.component';
import { ErrorComponent } from './components/error/error.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

import { ListadoComponent as GeneralFrasesListadoComponent } from './components/general-frases/listado/listado.component';
import { ListadoComponent as GeneralPalabrasListadoComponent } from './components/general-palabras/listado/listado.component';
import { PaisEstadoComponent } from './components/pais-estado/pais-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent,
    HomeComponent,
    EstadoComponent,
    PaisComponent,
    PaisEstadoComponent,
    FraseFormularioComponent,
    FraseDetallesComponent,
    FraseListadoComponent,
    PalabraFormularioComponent,
    PalabraDetallesComponent,
    PalabraListadoComponent,
    LenguaComponent,
    IdiomaComponent,
    FcategoriaComponent,
    FooterComponent,
    HeaderComponent,
    DetallesComponent,
    FormularioComponent,
    ListadoComponent,
    CategoriaComponent,
    RecuperacionComponent,
    IndiceComponent,
    ErrorComponent,
    FavoritosComponent,
    GeneralFrasesListadoComponent,
    GeneralPalabrasListadoComponent
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
