import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {UsuarioValidator} from './usuario.validator';

@Component({
  selector: 'app-formularios-reactive-forms',
  templateUrl: './formularios-reactive-forms.component.html',
  styleUrls: ['./formularios-reactive-forms.component.css']
})
export class FormulariosReactiveFormsComponent implements OnInit {


  constructor(private _fb: FormBuilder) {
  }

  //Formulario simplificada con formbuilder
  formularioFormBuilder = this._fb.group({
    usuario:['', [Validators.required]], // se puede sensilla
    // o llamando toda la instancia por inyeccion
    password: this._fb.control('', [Validators.required, Validators.minLength(2), UsuarioValidator.noEspaciosEnBlanco]),
  });

  //UsuarioValidator.noEspaciosEnBlanco validacion personalizado
  formularioReactivo = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2), UsuarioValidator.noEspaciosEnBlanco]),
  });

  ngOnInit() {
  }

  //Usando un getter para poder acceder solo desde password
  get password() {
    return this.formularioReactivo.get('password');
  }

}
