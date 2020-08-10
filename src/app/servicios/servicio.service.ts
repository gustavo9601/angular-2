import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {PostModelI} from '../modelos/post.modelI';
import {ComentariosModelI} from '../modelos/comentarios.modelI';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

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
    return this.http.post(this.url + 'posts', JSON.stringify(post))
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

}
