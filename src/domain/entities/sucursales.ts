export class Sucursales {
    private nombre : string;
    private numero : number;
    private nomenclatura : string;
    private direccion : string;
    private gerente : string;
    private ISP : [];

    constructor (nombre : string, numero : number, nomen : string, direccion : string, gerente : string, ISP : []) {
        this.nombre = nombre;
        this.numero = numero;
        this.nomenclatura = nomen;
        this.direccion = direccion || '';
        this.gerente = gerente || '';
        this.ISP = ISP || [];
    }

    getNombre () {
        return this.nombre;
    }
    getNumero () {
        return this.numero;
    }
    getNomenclatura () {
        return this.nomenclatura;
    }
    getDireccion () {
        return this.direccion;
    }
    getGerente () {
        return this.gerente;
    }
    getISP () {
        return this.ISP;
    }

    setNombre (nombre : string) {
        this.nombre = nombre;
        return 'applied';
    }
    setNumero (numero : number) {
        this.numero = numero;
        return 'applied';
    }
    setNomenclatura (nomen : string) {
        this.nomenclatura = nomen;
        return 'applied';
    }
    setDireccion (direccion : string) {
        this.direccion = direccion;
        return 'applied';
    }
    setGerente (gerente : string) {
        this.gerente = gerente;
        return 'applied';
    }
    setISP (ISP : []) {
        this.ISP = ISP;
        return 'applied';
    }
    
}