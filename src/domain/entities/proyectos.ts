export class Proyectos {
    private nombre : string;
    private etapas : number;
    private definicion : string;
    private initDate : Date;
    private duration : Date [];

    constructor (nombre : string, etapas : number, definicion : string) {
        this.nombre = nombre;
        this.etapas = etapas;
        this.definicion = definicion || '';
    }

    getNombre () {
        return this.nombre;
    }
    getEtapas () {
        return this.etapas;
    }
    getDefinicion () {
        return this.definicion;
    }
    getInitDate () {
        return this.initDate
    }
    getDuration () {
        return this.duration;
    }

    setNombre (nombre : string) {
        this.nombre = nombre;
        return 'applied';
    }
    setEtapas (etapas : number) {
        this.etapas = etapas;
        return 'applied'
    }
    setDefinicion (definicion : string) {
        this.definicion = definicion;
        return 'applied';
    }
    setInitDate (initDate : Date) {
        this.initDate = initDate;
        return 'applied';
    }
    setDuration (duration : Date []) {
        this.duration = duration;
        return 'applied'
    }
}