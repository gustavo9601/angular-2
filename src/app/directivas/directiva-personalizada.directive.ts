import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})

export class DirectivaPersonalizadaDirective {

  // Recibiendo un parametro al llamar la directiva
  @Input('appDirectivaPersonalizada') nuevoColor: string;

  constructor(private elemento: ElementRef) {
  }

  // @HostListener('evento a escuchar la funcion')
  @HostListener('mouseenter')
  onMouseEnter() {
    // Haciendo uso de ElementRef accedemos al elemento que activa la directiva con el evento pasado en el hostlistener
    this.elemento.nativeElement.style.backgroundColor = this.nuevoColor;
    this.elemento.nativeElement.style.color = 'black';
    console.log('Se esta haciendo hover sobre el texto');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elemento.nativeElement.style.backgroundColor = 'black';
    this.elemento.nativeElement.style.color = 'white';
    console.log('Se dejo de hacer hover sobre el texto');
  }
}
