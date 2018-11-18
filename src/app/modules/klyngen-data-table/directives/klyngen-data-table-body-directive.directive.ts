import { Directive, Input, ElementRef, ComponentFactoryResolver, Renderer2, ViewContainerRef } from '@angular/core';
import { IKlyngenTableDataRow } from '../interfaces/iklyngen-table-data';

@Directive({
  selector: '[KlyngenTableBody]'
})
export class KlyngenDataTableBodyDirectiveDirective {

    constructor(private elementRef: ElementRef,
                private componentFactory: ComponentFactoryResolver,
                private renderer: Renderer2,
                private viewContainerRef: ViewContainerRef) { }

    _headers: any[] = [];

    @Input()
    set data(d) {}

    @Input()
    set headers(identifiers: any[]) {
        this._headers = identifiers;
    }

    AddNewRow(data: IKlyngenTableDataRow) {
        const element = document.createElement('tr');
        console.log(data);

        for (const cell of data.generateDataRow(this.headers)) {
            // Create a td-element
            const th = this.renderer.createElement('th');
            const componentFactory =
                this.componentFactory.resolveComponentFactory(cell.componentType);

            // Create the component
            const component = this.viewContainerRef.createComponent(componentFactory);

            


            // Add the custom component to it
        }
    }

    RemoveRow(index: number) {
    }
}
