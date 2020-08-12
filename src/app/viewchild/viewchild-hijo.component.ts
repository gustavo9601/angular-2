import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-viewchild-hijo',
  template: `
    <h1>*** {{mensajeHijo}} ***</h1>
  `,
  styles: []
})
export class ViewchildHijoComponent implements OnInit {

  mensajeHijo = 'Hijo del ViewChild';

  constructor() {
  }

  ngOnInit() {
  }

}
