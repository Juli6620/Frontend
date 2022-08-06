export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaE: string;
    fechaEF: string;

    constructor(nombreE: string, descripcionE: string, fechaE:string, fechaEF:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaE= fechaE;
        this.fechaEF= fechaEF;
    }
}