
export class Proyectos {
    id? : number;
    nombreP : string;
    descripcionP : string;
    fechaP: string;
    fechaPF: string;

    constructor(nombreP: string, descripcionP: string, fechaP: string, fechaPF: string ){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP= fechaP;
        this.fechaPF= fechaPF;
    }
}