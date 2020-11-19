import { Pais } from './pais';

export interface Idioma {
    idIdioma:number;
    nombre:string;
    abreviatura:string;
    paises:Pais[];
}