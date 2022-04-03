import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  InfoPagina
} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};

  cargada = false;

  equipo: any[] = [];

  clientes: any[] = [];

  servicios: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarClientes();
    this.cargarServicios();
  }

  private cargarInfo() {
    //Leer el archivo JSON
    this.http.get('assets/data/data-pages.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;

      });
  }

  private cargarEquipo() {
    //Leer el archivo JSON
    this.http.get('https://fortress-solitude-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
      });
  }

  public cargarClientes() {
    this.http.get('https://fortress-solitude-default-rtdb.firebaseio.com/clientes.json')
      .subscribe((resp: any) => {
        this.clientes = resp;
      })
  }

  cargarServicios() {
    this.http.get('https://fortress-solitude-default-rtdb.firebaseio.com/servicios.json')
    .subscribe( (resp: any) => {
      this.servicios = resp;
    })
  }
}
