import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild, ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ViewchildHijoComponent} from './viewchild-hijo.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {


  // @ViewChild('template variable en el html') nombreVariableManipularEnComponete: ElementRef
  // Desde angular >= 8  se puede pasar  @ViewChild('texto', {static: true})  para que se pueda usar en el ngOnInit
  @ViewChild('texto') textoVariableComponente: ElementRef;
  // Acceder a componente hijo que se llame desde este componente
  // @ViewChild(NombreDelComponente) nombreVariableManipularEnComponete : TipoNombreDelComponente
  @ViewChild(ViewchildHijoComponent) variableComponenteViewChildHijo: ViewchildHijoComponent;

  // @ViewChildren permite acceder por ejemplo a una lista de componentes hijo que se iteran en este componente
  // De esa forma se tiene acceso en forma de lista a cada objeto para poder accederlo o mutarlo
  // @ViewChildren(ViewchildHijoComponent) listaViewChildren: QueryList<ViewchildHijoComponent>;


  // @ContentChild permite acceder a la proyeccion de contenido, de tenerla en el componente hijo que se use en ese componente
  // de esa forma lo que se le pase dentro de los parametros pueden ser accedidos o mutados
  // @ContentChild(ViewchildHijoComponent) contenidoViewChildren: ViewchildHijoComponent;

  // @ContentChildren permite lo mismo que ContentChild, pero puede acceder a todos los componentes hijos que se itenren por proyeccion
  // @ContentChildren(ViewchildHijoComponent) listaDeComponentesHijos: QueryList<ViewchildHijoComponent>

  constructor(private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  // En este ciclo de vida se tiene acceso al viewchild
  ngAfterViewInit(): void {
    console.log('this.textoVariableComponente', this.textoVariableComponente);
    console.log('this.textoVariableComponente.nativeElement.textContent', this.textoVariableComponente.nativeElement.textContent);

    //Accedemos a las propiedades del componente llamando por vewchild
    console.log('this.variableComponenteViewChildHijo', this.variableComponenteViewChildHijo);
    console.log('this.variableComponenteViewChildHijo.mensajeHijo', this.variableComponenteViewChildHijo.mensajeHijo);
    this.actualizarVariableComponenteHijo();
    console.log('this.variableComponenteViewChildHijo.mensajeHijo', this.variableComponenteViewChildHijo.mensajeHijo);
    let counter = 1;
    setInterval(() => {
      this.textoVariableComponente.nativeElement.textContent = 'Hola mundo #' + counter;
      counter++;
    }, 1000);
  }

  actualizarVariableComponenteHijo() {
    setTimeout(() => {
      this.variableComponenteViewChildHijo.mensajeHijo = 'Mensaje cambio desde el componente padre';
    }, 2000);


    // Se utiliza el ChangeDetectionRef, de angular para que detecte el cambio que se hizo sobre el componente hijo
    this.changeDetectionRef.detectChanges();
  }


}
