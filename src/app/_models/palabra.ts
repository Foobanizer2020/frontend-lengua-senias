import { Categoria } from './categoria';

export interface Palabra {
    idPalabra:number;
    nombre:string;
    contextoSenia:string;
    definicion:string;
    categoria:Categoria;
}