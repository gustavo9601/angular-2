import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  curso = {
    nombre: 'Html5 con css3 y Boostrap',
    duracion: 55,
    estudiantes: 100,
    costo: 900000.1,
    fecha: '2020/01/20'
  };

  constructor() { }

  ngOnInit() {
  }

}
