import {Component, OnInit} from '@angular/core';
import {ServicioService} from './servicios/servicio.service';
import {PostModelI} from './modelos/post.modelI';
import {ComentariosModelI} from './modelos/comentarios.modelI';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaDePosts: PostModelI[] = [];
  // listaDePosts: Array<PostModelI> = [];    // Otra forma de hacer la declaracion

  // Creamos un observable que almacenara directamente la respuesta del servicio
  listaDeComenarios$: Observable<ComentariosModelI[]>;

  inputNewPost: string = '';

  constructor(private _servicio: ServicioService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadComments();

    this.route.paramMap.subscribe(
      (respuesta) => {
        console.log("respuesta rutas", respuesta);
        // Capturamos si vienen parametros en la URL
        // respuesta.get('id');
      }
    );

    this.route.queryParamMap.subscribe(
      (respuesta) => {
        console.log("respuesta parametros", respuesta);
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
          console.log('Respuesta al crear un nuevo post', respuesta);
        }
      );
    }
  }
}
