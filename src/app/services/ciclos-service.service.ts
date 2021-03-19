import { RecorrerCursos } from './../utils/RecorrerCursos';
import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CiclosServiceService {

  conocimientos: RecorrerCursos[] = [
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: './assets/images/daw.jpeg',
    },
  ]

  constructor() { }

  getAllConocimientos():RecorrerCursos[]{
    return this.conocimientos;
  }

  getImagenesDetallesFiltrados(imagen:string){
    return this.conocimientos.filter(element => {
      return element.imagen.toLowerCase().includes(imagen.toLowerCase())
    })
  }

}
