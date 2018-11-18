import { Renderer2, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[KlyngenTableHeader]'
})
export class KlyngenTableHeaderDirective {

    constructor(private _element: ElementRef, private _renderer: Renderer2) {
    }

    drawHeader(headers: string[]) {
        const tr = document.createElement('tr');

        console.log(headers);

        for (const head of headers) {
            const th = document.createElement('th');
            th.innerText = head;
            this._renderer.appendChild(this._element.nativeElement, th);
        }
        console.log(tr);

        this._renderer.appendChild(this._element.nativeElement, tr);

    }
}
