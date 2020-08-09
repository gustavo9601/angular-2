import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-eventos',
  templateUrl: './binding-eventos.component.html',
  styleUrls: ['./binding-eventos.component.css']
})
export class BindingEventosComponent implements OnInit {


  disabled: boolean = true;
  title = 'angular2';
  cod_keyboard:string = ''
  letra:string = ''
  valor_input = ''
  inputTextTwoWayDataBinding = ''

  eventos(event) {
    console.log('Event btn', event);
    console.log('Event btn type', event.type);
  }

  onKeyUp(event) {
    console.log('Event keyup', event);
    console.log('Event keyup keycode tecla', event.keyCode);
    this.cod_keyboard = event.keyCode;
    this.letra = event.key;
    this.valor_input = event.target.value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
