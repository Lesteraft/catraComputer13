import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-navs',
  templateUrl: './sub-navs.component.html',
  styleUrls: ['./sub-navs.component.css']
})
export class SubNavsComponent implements OnInit {

   @Input() tema: string;

  constructor() { }

  ngOnInit() {
  }

}
