import { CiclosServiceService } from './../../services/ciclos-service.service';
import { RecorrerCursos } from './../../utils/RecorrerCursos';
import { CiclosComponent } from './../ciclos/ciclos.component';
import { RecorrerAsignaturas } from './../../utils/RecorrerAsignaturas';
import { AsignaturasServiceService } from './../../services/asignaturas-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sign } from 'crypto';
import { element } from 'protractor';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  ciclo: string = "";
  curso: number = 0;
  imagen: string = "";
  //curso: number;
  asignaturas:RecorrerAsignaturas[] = []
  conocimientos: any[] = []
  datos: RecorrerAsignaturas[] = []
  imagenes: RecorrerCursos[]= []

  

  constructor(private ruta:ActivatedRoute,private sing:AsignaturasServiceService,private cono:CiclosServiceService) { }

  ngOnInit(): void {
    this.ciclo = this.ruta.snapshot.params.ciclo;
    this.curso = this.ruta.snapshot.params.ciclos;
    this.asignaturas = this.sing.getFiltroCursoCiclo(this.curso,this.ciclo);
    this.asignaturas.forEach(element => {
      this.conocimientos.push(element.conocimientos);
    })
    this.datos = this.sing.getFiltroCursoCiclo(this.curso,this.ciclo);
    this.imagenes = this.cono.getImagenesDetallesFiltrados(this.imagen);

  }



}
