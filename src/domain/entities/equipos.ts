export class Equipos {
    private nombre : string;
    private ubicacion : string;

    constructor (nombre : string, ubicacion : string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    getNombre () {
        return this.nombre;
    }
    getUbication () {
        return this.ubicacion;
    }

    setNombre (nombre : string) {
        this.nombre = nombre;
        return 'Applied';
    }
    setUbication (ubication : string) {
        this.ubicacion = ubication;
        return 'Applied';
    }
}