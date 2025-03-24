export class Proveedores {
    private cuit : string;
    private nombre : string;
    private tel : string;
    private direccion : string;
    private representante : string;

    constructor (cuit : string, nombre : string, tel : string, direccion : string, representante : string ) {
        this.cuit = cuit;
        this.nombre = nombre;
        this.tel = tel || '';
        this.direccion = direccion || '';
        this.representante = representante || '';
    }

    getCuit () {
        return this.cuit;
    }
    getNombre () {
        return this.nombre;
    }
    getTel () {
        return this.tel;
    }
    getDireccion () {
        return this.direccion;
    }
    getRepresentante () {
        return this.representante;
    }

    setCuit (cuit : string) {
        this.cuit = cuit;
        return 'Applied';
    }
    setNombre (nombre : string) {
        this.nombre = nombre;
        return 'applied';
    }
    setTel (tel : string) {
        this.tel = tel;
        return 'applied';
    }
    setDireccion (direccion : string) {
        this.direccion = direccion;
        return 'applied';
    }
    setRepresentante (representante : string) {
        this.representante = representante;
        return 'applied';
    }
}