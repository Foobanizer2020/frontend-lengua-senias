import { Pais } from './pais';

export interface Lengua {
    idLengua:number;
    nombre:string;
    abreviatura:string;
    paises:Pais[];
}