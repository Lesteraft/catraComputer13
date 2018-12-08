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
    console.log(this.count);
  }

  restarLineas() {
    this.text = $('#instrucciones').val();
    this.lines = this.text.split('\n');
    this.count = this.lines.length - 1;
    console.log(this.count);
  }

}
