import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];

  cargando = true;

  productosFiltrados: Producto[] = [];

  constructor(
    private http: HttpClient,
  ) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( (resolve, reject) => {
      
      this.http.get('https://fortress-solitude-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        this.productos = resp;
        this.cargando = false;
        
      });
    });
    
  }

  getProducto( id: string ): Observable<any>{
    return this.http.get(`https://fortress-solitude-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(valor: string){

    if(this.productos.length === 0){
      //Cargar productos
      this.cargarProductos().then( () => {
        //Ejecutar después de tener los productos
        //Aplicar Filtro
        this.filtrarProductos(valor);
      });
    } else {
      //Aplicar el filtro
      this.filtrarProductos(valor);

    }

  }

  private filtrarProductos( valor: string){
    console.log(this.productos);
    
    this.productosFiltrados = [];

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if( prod.categoria.indexOf( valor ) >= 0 || tituloLower.indexOf( valor ) >= 0 ) {
        this.productosFiltrados.push( prod );
      }

    });
  }

}
