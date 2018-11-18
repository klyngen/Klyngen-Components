import { Component, OnInit } from '@angular/core';
import { IKlyngenTableElement } from '../modules/klyngen-data-table/interfaces/iklyngen-table-element';
import { KlyngenTableDataRow, KlyngenTableDataCell, IKlyngenTableDataCell, IKlyngenTableHeaderElement } from '../modules/klyngen-data-table/interfaces/iklyngen-table-data';
import { IklyngenHeadElement } from '../modules/klyngen-data-table/interfaces/iklyngen-head-element';
import { BasicTextComponentComponent } from '../modules/klyngen-data-table/basic-text-component/basic-text-component.component';

@Component({
    selector: 'test-component',
    templateUrl: './test-component.component.html',
    styleUrls: ['./test-component.component.sass']
})
export class TestComponentComponent implements OnInit {

    header: IKlyngenTableHeaderElement[] = [
        {id: 'country', name: 'Country'},
        {id: 'race', name: 'Alien Race'},
        {id: 'desc', name: 'Description'}
    ];

    pyramids = new AlienStructure ([
        new KlyngenTableDataCell('country', 'Egypt'),
        new KlyngenTableDataCell('race', 'SunAliens'),
        new KlyngenTableDataCell('desc', 'Landing site for aliens')
    ]);


    aztec  = new AlienStructure([
        new KlyngenTableDataCell('country', 'Mexico'),
        new KlyngenTableDataCell('race', 'Greys'),
        new KlyngenTableDataCell('desc', 'Vacation resort for alien race. Aliens deserve to chill after building so much stuff')
    ]);

    data = [this.aztec, this.pyramids];


    constructor() {

    }

    ngOnInit() {
    }

}

class AlienStructure extends KlyngenTableDataRow {
    constructor(data: IKlyngenTableDataCell[]) {
        super(data);
    }
}
