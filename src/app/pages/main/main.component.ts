import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/clientes';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public infoService: InfoPaginaService
  ) { }

  ngOnInit(): void {
  }

}
