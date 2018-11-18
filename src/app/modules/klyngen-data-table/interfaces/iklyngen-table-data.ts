import { SORT } from '../common/enums.enum';
import { Type } from '@angular/core';
import { BasicTextComponentComponent } from '../basic-text-component/basic-text-component.component';
import { IKlyngenTableElement } from './iklyngen-table-element';

 /*
 * Vanilla implementation of the IKlyngenTableDataRow
 */
export class KlyngenTableDataRow implements IKlyngenTableDataRow {

    data: IKlyngenTableDataCell[] = [];

    constructor(data: IKlyngenTableDataCell[]) {
        this.data = data === undefined ? [] : data;
    }

     /**
      * Basic search functionality to find out which row
      * to display
      * @param searchString is what we are looking for
      * @return number where the value represents how it should be ranked
      */
    search(searchString: string): number {
        let searchScore = 0;
        for (const item of this.data) {
            searchScore += item.search(searchString);
            return searchScore;
        }
    }

     /**
      * Generates a list of Cells that will be displayed
      * @param identifiers What part of the data will be included in the row
      * @return List of cels that should be displayed
      */
    generateDataRow(identifiers: any[]): IKlyngenTableDataCell[] {
        const row: IKlyngenTableDataCell[] = [];

        console.log(identifiers);

        for (const id of identifiers) {
            let found = false;
            for (const cell of this.data) {
                if (cell.id === id) {
                    row.push(cell);
                    found = true;
                    break;
                }
            }
            if (!found) {

                row.push(new KlyngenTableDataCell('EMPTY', ' - '));
            }
        }

        return row;
    }
}

/**
 * Interface describing the most basic implementation
 * of the DataCell
 */
export interface IKlyngenTableDataCell {
    value: any;
    id: any;
    componentType: Type<IKlyngenTableElement>;

    search(searchString: string): number;
    sort(compare: any): boolean;
}

// Describes the basic interface a data class
// Will need to implement in order to use the
// KlyngenDataTable
// Each instance of the object implementing this
// interface must represent a row
export interface IKlyngenTableDataRow {
    data: IKlyngenTableDataCell[];
    search(searchString: string): number;
    generateDataRow(identifiers: any[]): IKlyngenTableDataCell[];
}

/**
 * Vanilla implementation of the IKlyngenDataTableCell
 */
export class KlyngenTableDataCell implements IKlyngenTableDataCell {
    value: any;
    id: any;
    componentType: Type<BasicTextComponentComponent>;

    constructor (id: any, value: string) {
        this.id = id; this.value = value;
    }

    /**
     * Search the value of the cell. In the case of the value
     * being an array we go recurcive on that shit!.
     * Feel free to overwrite this function to suit your needs
     * @param searchString text from searchbar
     * @param value optional parameter to enable recurcive search
     * @return same output as expected from String.search()
     */
    search(searchString: string, value?: any): number {

        value === undefined ? this.value : value;

        if (Array.isArray(value)) {
            let tempValue = 0;
            for (const val of value) {
                tempValue += this.search(searchString, val);
            }

            return tempValue / value.length;
        }

        const castVal = <string>value;
        return castVal.search(searchString);
    }

    /**
     * basially compares the incoming parameter
     * @param comare element to compare with
     * @return true if compare is smaller, false if larger
     */
    sort(compare: any): boolean {

        let a = <string>this.value;
        let b = <string>compare;

        if (Array.isArray(this.value) && Array.isArray(compare)) {
            a = this.value.join('');
            b = compare.join('');
        }

        return (a > b);
    }

}

export interface IKlyngenTableHeaderElement {
    id: any;
    name: string;
}
