export class Usuario {
    id:number;
    nombre:String;
    apellidos:String;
    email:String;
    password:String;
    tipo_usuario:String;

    constructor(id, nombre, apellidos, email, password, tipo_usuario) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.tipo_usuario = tipo_usuario;
    }
}