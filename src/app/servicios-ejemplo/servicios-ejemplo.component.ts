import {Component, OnInit} from '@angular/core';
import {PostModelI} from '../modelos/post.modelI';
import {Observable} from 'rxjs';
import {ComentariosModelI} from '../modelos/comentarios.modelI';
import {ServicioService} from '../servicios/servicio.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servicios-ejemplo',
  templateUrl: './servicios-ejemplo.component.html',
  styleUrls: ['./servicios-ejemplo.component.css']
})
export class ServiciosEjemploComponent implements OnInit {


  contador: number = 1;
  mensajeLocal: string = '';

  listaDePosts: PostModelI[] = [];
  // listaDePosts: Array<PostModelI> = [];    // Otra forma de hacer la declaracion
  // Creamos un observable que almacenara directamente la respuesta del servicio
  listaDeComenarios$: Observable<ComentariosModelI[]>;


  inputNewPost: string = '';

  constructor(private _servicio: ServicioService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadComments();

    this.loadMensajeInicialServicio();

    this.route.paramMap.subscribe(
      (respuesta) => {
        console.log('respuesta rutas', respuesta);
        // Capturamos si vienen parametros en la URL
        // respuesta.get('id');
      }
    );

    this.route.queryParamMap.subscribe(
      (respuesta) => {
        console.log('respuesta parametros', respuesta);
        // Capturamos si vienen parametros en la URL
        // respuesta.get('id');
      }
    );

    //Accedemos directamente al parametro
    //this.route.snapshot.queryParamMap.get('id_parametro')

  }

  loadPosts() {
    this._servicio.getPosts().subscribe(
      (respuesta) => {
        this.listaDePosts = respuesta;
      }, (error => {
        console.log('error posts', error);
      })
    );
  }

  loadComments() {
    this.listaDeComenarios$ = this._servicio.getComments();
  }

  createNewPost() {
    if (this.inputNewPost) {
      const post = {title: this.inputNewPost};
      this._servicio.savePost(post).subscribe(
        (respuesta) => {
          console.log('Respuesta efectiva al crear un nuevo post', respuesta);
        },
        //NO es necesario ya que desde el servicio se puede centralizar las exepciones
        (error => {
          alert('Error ' + error);
        })
      );
    }
  }

  cambiarMensaje(nuevo_mensaje) {
    this._servicio.cambiarMensajeObservableVariable(nuevo_mensaje + ' # ' + this.contador);
    this.contador++;
  }


  loadMensajeInicialServicio() {
    // Nos suscribimos a la variable para recibir cualquier cambio
    this._servicio.mensajeActual$.subscribe(
      (respuesta) => {
        this.mensajeLocal = respuesta;
      }
    );
  }

}
