import { Categoria } from './categoria';

export interface Palabra {
    idPalabra:number;
    nombre:string;
    contexto:string;
    definicion:string;
    categoria:Categoria;
}