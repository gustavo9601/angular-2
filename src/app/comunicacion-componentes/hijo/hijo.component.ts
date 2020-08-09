import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // Recibimos del padre [persona]
  // @Input('variable enviada desde el padre') alias;
  @Input('persona') persona;

  // Enviamos una variable , como evento
  // @Output('variable que se debe enviar') alias local = new EventEmitter<any>();
  @Output() hijo = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  enviandoAlPadreconEventEmitter() {
    const hijoAEnviar = {
      nombre: 'Gus Hijo',
      edad: 0
    };
    // Emitimos un valor para todo lo que este a la escucha
    this.hijo.emit(hijoAEnviar);
  }

}
