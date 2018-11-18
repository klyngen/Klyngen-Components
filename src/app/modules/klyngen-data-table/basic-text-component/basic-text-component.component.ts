import { Component, OnInit } from '@angular/core';
import { IKlyngenTableElement } from '../interfaces/iklyngen-table-element';

@Component({
  selector: 'basic-text-component',
  templateUrl: './basic-text-component.component.html',
  styleUrls: ['./basic-text-component.component.sass']
})
export class BasicTextComponentComponent implements OnInit, IKlyngenTableElement {

    data: string;

  constructor() { }

  ngOnInit() {
  }

}
