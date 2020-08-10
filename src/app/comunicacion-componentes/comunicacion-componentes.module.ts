import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ComunicacionComponentesComponent} from './comunicacion-componentes.component';
import {HijoComponent} from './hijo/hijo.component';

// Rutas del modulo
const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ComunicacionComponentesComponent},
      {path: 'pruebas', component: ComunicacionComponentesComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ComunicacionComponentesComponent,
    HijoComponent],
  imports: [
    CommonModule,
    // Se le especifica las rutas hijas
    RouterModule.forChild(routes)
  ],
})
export class ComunicacionComponentesModule {
}
