import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
public listadoEntradas: Entrada[];
  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección realizaremos una pequeña introduccion'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido como lenguaje de Typescript'
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'En esta lección realizaremos una pequeña introduccion'
      }
    ];
  }

  ngOnInit(): void {
  }

}
