import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {

  text;
  lines;
  count;
  numeroLineas: number;

  constructor() { }

  ngOnInit() {
  }

  sumarLineas() {
    this.text = $('#instrucciones').val();
    this.lines = this.text.split('\n');
    this.count = this.lines.length + 1;
    console.log(this.count);
    this.numeroLineas = this.count;
    this.modificarDiv(this.numeroLineas);
  }

  restarLineas() {
    this.text = $('#instrucciones').val();
    this.lines = this.text.split('\n');
    this.count = this.lines.length;
    console.log(this.count);
    this.numeroLineas = this.count;
    this.modificarDiv(this.numeroLineas);
  }

  modificarDiv(numero: number) {
    $('#lineas').html(' ');
    for ( let i = 0 ; i < numero ; i++ ) {
      $('#lineas').append(
        `<div> ${ i + 1 } </div>`
      );
    }
  }

  totalLineas() {
    this.text = $('#instrucciones').val();
    this.lines = this.text.split('\n');
    this.count = this.lines.length;
    console.log(this.count);
    this.numeroLineas = this.count;
    this.modificarDiv(this.numeroLineas);
  }

}
