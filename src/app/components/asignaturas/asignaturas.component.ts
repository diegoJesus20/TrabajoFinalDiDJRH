import { AsignaturasServiceService } from './../../services/asignaturas-service.service';
import { RecorrerAsignaturas } from './../../utils/RecorrerAsignaturas';
import { Component, OnInit } from '@angular/core';
import { count } from 'node:console';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  conocimientos: RecorrerAsignaturas[] = [];
  count:number = 0;

  constructor(private sign: AsignaturasServiceService) { }

  ngOnInit(): void {
    this.conocimientos = this.sign.getAllAsignaturas();
    this.count = this.conocimientos.length;
  }

  filtrarDatos(nombre:string,ciclo:string){
      this.conocimientos = this.sign.getDamAsignaturasFiltradas(nombre);
      this.count = this.conocimientos.length;
      if (ciclo == "dam") {
        this.conocimientos = this.sign.getDamAsignaturasFiltradas(nombre);
        this.sign.getDamAsignaturas(ciclo)
        this.count = this.conocimientos.length;
      } else if (ciclo == "daw") {
        this.conocimientos = this.sign.getDamAsignaturasFiltradas(nombre);
        this.sign.getDamAsignaturas(ciclo)
        this.count = this.conocimientos.length;
      }
  }

  

}
