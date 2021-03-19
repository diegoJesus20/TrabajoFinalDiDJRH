import { Router } from '@angular/router';
import { AsignaturasServiceService } from './../../services/asignaturas-service.service';
import { RecorrerAsignaturas } from './../../utils/RecorrerAsignaturas';
import { RecorrerCursos } from './../../utils/RecorrerCursos';
import { CiclosServiceService } from './../../services/ciclos-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  signaturesDAW: RecorrerAsignaturas[] = [];
  signaturesDAM: RecorrerAsignaturas[] = [];
  conocimientos: RecorrerCursos[] = [];

  constructor(private sign:AsignaturasServiceService, private cono:CiclosServiceService,private rutas:Router) { }

  Dam:string = 'DAM';
  Daw:string = 'DAW';

  ngOnInit(): void {
    this.signaturesDAM = this.sign.getDamAsignaturas(this.Dam);
    this.signaturesDAW = this.sign.getDamAsignaturas(this.Daw);
    //Llamamos a la funcion del servicio
    this.conocimientos = this.cono.getAllConocimientos();
  }

  verDetalle(ciclo:string,curso:number){
    this.rutas.navigate(['ciclo',ciclo,curso])
  }

  pasarDatos(curso:number,nombre:string){
    this.rutas.navigate(['detalles',curso,nombre])
  }

}