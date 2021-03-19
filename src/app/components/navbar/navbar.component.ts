import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

datoPasar=1;

  constructor(private gestorRutas: Router) { }

  ngOnInit(): void {
  }

  irCiclo(numero:number){
    //console.log("Elemento pulsado");
    // voy a navegar desde el Router
    this.gestorRutas.navigate(['ciclos',numero])
  }
  
}
