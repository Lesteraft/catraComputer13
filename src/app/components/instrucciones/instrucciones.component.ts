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

  constructor() { }

  ngOnInit() {
  }

  sumarLineas() {
    this.text = $('#instrucciones').val();
    this.lines = this.text.split('\n');
    this.count = this.lines.length + 1;
    this.modificarDiv(this.count);
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
    setTimeout(() => {
      this.text = $('#instrucciones').val();
      this.lines = this.text.split('\n');
      this.count = this.lines.length;
      this.modificarDiv(this.count);
    }, 10);
  }

  lineasBorradas() {
    setTimeout(() => {
      this.text = $('#instrucciones').val();
      this.lines = this.text.split('\n');
      this.count = this.lines.length;
      this.modificarDiv(this.count);
    }, 10);
  }

}
