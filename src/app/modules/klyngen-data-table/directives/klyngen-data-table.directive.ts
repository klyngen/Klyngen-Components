import { ComponentFactoryResolver, Directive, ElementRef, ChangeDetectorRef, Input, ComponentRef, Component, AfterViewInit, ContentChild } from '@angular/core';
import { KlyngenTableHeaderDirective } from './klyngen-table-header.directive';
import { KlyngenDataTableBodyDirectiveDirective } from './klyngen-data-table-body-directive.directive';
import { Type } from '@angular/core';
import { IKlyngenTableElement } from '../interfaces/iklyngen-table-element';
import { KlyngenTableDataRow, KlyngenTableDataCell } from '../interfaces/iklyngen-table-data';
import { IklyngenHeadElement } from '../interfaces/iklyngen-head-element';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[KlyngenDataTable]'
})
export class KlyngenDataTableDirective {

    constructor(private _element: ElementRef,
        private _cd: ChangeDetectorRef,
        private _cfr: ComponentFactoryResolver) {
    }
    // TEMPORARY DATA
    _tableData: KlyngenTableDataRow[] = [];
    _headers: string[] = [];
    _tableBodyData = [];


    // Reference to the header set by the user
    @ContentChild(KlyngenTableHeaderDirective) _tableHeader: KlyngenTableHeaderDirective;
    @ContentChild(KlyngenDataTableBodyDirectiveDirective) _tableBody: KlyngenDataTableBodyDirectiveDirective;

    // The data that will be passed on to the component in question
    @Input()
    set data(input: KlyngenTableDataRow[]) {
        this._tableData = input;

        console.log(input);

        // We don't do shit unless we have hard data
        if (input === null || input === undefined) { return; }

        if (this._headers.length === 0) {
            this.GenerateDefaultHeader();
        }

        // Generate default headers

        for (const item of input) {
            this.AddComponent(item);
        }
        this._cd.markForCheck();
    }


    @Input()
    set headers(headers: IklyngenHeadElement[]) {
        if (headers.length > 0) {
            this._headers = [];

            for (const head of headers) {
                this._headers.push(head.name);
            }
        }
        this.RedrawHeader();
        this._cd.markForCheck();
    }

    // What kind of component are we going to generate
    @Input()
    set search(searchString: string) {

    }


    private RedrawHeader() {
        this._tableHeader.drawHeader(this._headers);
    }

    private AddComponent(data: KlyngenTableDataRow) {
        //const componentFactory = this._cfr.resolveComponentFactory(this._componentType);
        //const viewContainerRef = this._tableBody.viewContainerRef;
        //const componentRef = viewContainerRef.createComponent(componentFactory);
        //componentRef.instance.data = data;
        this._tableBody.AddNewRow(data);
    }


    /**
      * Generates a header based on the ID's of the columns in a row
      * this is not ideal.
      */
    private GenerateDefaultHeader() {
        const header: string[] = [];

        if (this._tableData.length === 0) {return; }

        console.log(this._tableData);

        for (const col of this._tableData[0].data) {
            header.push((<string>col.id).charAt(0).toUpperCase());
        }

        this._headers = header;

    }
}

