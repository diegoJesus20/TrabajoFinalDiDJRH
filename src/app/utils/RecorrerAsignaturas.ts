export interface RecorrerAsignaturas{
    nombre:string;
    profesor:string;
    conocimientos:{nombre:string,imagen:string}[];
    ciclo:string;
    curso:number;
}  



/* export class RecorrerAsignaturas{
    constructor(private nombre:string,private profesor:string,
    private conocimientos:Array<[conocimientos]>,private ciclo:string,private curso:number){
        this.nombre = nombre;
        this.profesor = profesor;
        this.ciclo = ciclo;
        this.curso = curso;
    }

    public get getNombre(): string {
        return this.getNombre;
    }
    
    public get getProfesor(): string {
        return this.getProfesor;
    }

    
    public get getCiclo() : string {
        return this.getCiclo;
    }

    
    public get getCurso() : string {
        return this.getCurso;
    }   
}
interface conocimientos{
    nombre:string;
    imagen:string;
} */


