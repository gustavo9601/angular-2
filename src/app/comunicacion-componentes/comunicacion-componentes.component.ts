import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comunicacion-componentes',
  templateUrl: './comunicacion-componentes.component.html',
  styleUrls: ['./comunicacion-componentes.component.css']
})
export class ComunicacionComponentesComponent implements OnInit {

  persona = {
    nombre: 'Gustavo Marquez',
    edad: 24
  };

  hijoEnvioAlgo = null;

  constructor() {
  }

  ngOnInit() {
  }

  getInformacionHijo(hijo) {
    console.log('hijo', hijo);
    this.hijoEnvioAlgo = hijo;
  }

}
