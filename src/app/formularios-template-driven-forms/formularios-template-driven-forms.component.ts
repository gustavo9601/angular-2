import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-formularios-template-driven-forms',
  templateUrl: './formularios-template-driven-forms.component.html',
  styleUrls: ['./formularios-template-driven-forms.component.css']
})
export class FormulariosTemplateDrivenFormsComponent implements OnInit {

  usuario = {
    nombre: 'Gustavo',
    phone: 3105789429,
    mensaje: 'Hola Mundo'
  };

  constructor() {
  }

  ngOnInit() {
  }

  enviarFormularioUsuario(formularioUsuario: NgForm) {
    console.log('formularioUsuario', formularioUsuario);
    if (formularioUsuario.valid) {
      console.log('Enviando usuario', formularioUsuario.value);
    } else {
      console.error('Formulari invalido XXX');
    }
  }
}
