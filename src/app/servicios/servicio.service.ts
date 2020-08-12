import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {PostModelI} from '../modelos/post.modelI';
import {ComentariosModelI} from '../modelos/comentarios.modelI';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  // Variable de tipo BehaviorSubject que generara un Subject, ya que extiende de esta clase y permite definir un valor por default
  // Se Puede usar solo Subject<string>()  para que no inicialice ningun valor // es la unica diferente
  //private mensajeBehaviourSubject = new Subject<string>();
  private mensajeBehaviourSubject = new BehaviorSubject<string>('Texto inicial');
  // Se asgina el sujeto y se usara en esta variable como un observable, para permitir la subscripcion
  mensajeActual$ = this.mensajeBehaviourSubject.asObservable();

  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostModelI[]> {
    return this.http.get<PostModelI[]>(this.url + 'posts');
  }

  getComments(): Observable<ComentariosModelI[]> {
    return this.http.get<ComentariosModelI[]>(this.url + 'posts/1/comments');
  }

  savePost(post) {
    // Usando pipe, capturamos para esta peticio su hay algun error
    return this.http.post(this.url + 'postss', JSON.stringify(post))
      .pipe(
        // catchError(this.errorHandlerPeticion) capturara el error y ejecutara la funcion pasada por parametro
        catchError(this.errorHandlerPeticion)
      );
  }

  // Funcion para capturar error en la peticion
  private errorHandlerPeticion(error: HttpErrorResponse) {
    console.log('Error en el servicio', error);
    return throwError(error);
  }


  cambiarMensajeObservableVariable(nuevo_mensaje) {
    this.mensajeBehaviourSubject.next(nuevo_mensaje);
  }

}
