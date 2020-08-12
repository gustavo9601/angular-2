import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BindingEventosComponent} from './binding-eventos/binding-eventos.component';

import {DirectivasComponent} from './directivas/directivas.component';
import {DirectivaPersonalizadaDirective} from './directivas/directiva-personalizada.directive';
import {PipesComponent} from './pipes/pipes.component';
import {PipePersonalizadoPipe} from './pipes/pipe-personalizado.pipe';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';

import { FormulariosReactiveFormsComponent } from './formularios-reactive-forms/formularios-reactive-forms.component';
import { FormulariosTemplateDrivenFormsComponent } from './formularios-template-driven-forms/formularios-template-driven-forms.component';
import { ServiciosEjemploComponent } from './servicios-ejemplo/servicios-ejemplo.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingEventosComponent,
    DirectivasComponent,
    DirectivaPersonalizadaDirective,
    PipesComponent,
    PipePersonalizadoPipe,
    NotFoundComponent,
    FormulariosReactiveFormsComponent,
    FormulariosTemplateDrivenFormsComponent,
    ServiciosEjemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
