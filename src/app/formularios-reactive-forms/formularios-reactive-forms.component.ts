import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UsuarioValidator} from './usuario.validator';

@Component({
  selector: 'app-formularios-reactive-forms',
  templateUrl: './formularios-reactive-forms.component.html',
  styleUrls: ['./formularios-reactive-forms.component.css']
})
export class FormulariosReactiveFormsComponent implements OnInit {


  //UsuarioValidator.noEspaciosEnBlanco validacion personalizado
  formularioReactivo = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2), UsuarioValidator.noEspaciosEnBlanco]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  //Usando un getter para poder acceder solo desde password
  get password() {
    return this.formularioReactivo.get('password');
  }

}
