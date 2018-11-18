import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlyngenDataTableDirective } from './directives/klyngen-data-table.directive';
import { KlyngenDataTableBodyDirectiveDirective } from './directives/klyngen-data-table-body-directive.directive';
import { KlyngenTableHeaderDirective } from './directives/klyngen-table-header.directive';
import { BasicTextComponentComponent } from './basic-text-component/basic-text-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
    exports: [
        KlyngenTableHeaderDirective,
        KlyngenDataTableDirective,
        KlyngenDataTableBodyDirectiveDirective
    ],
    declarations: [KlyngenDataTableDirective,
                   KlyngenDataTableBodyDirectiveDirective,
                   KlyngenTableHeaderDirective,
                   BasicTextComponentComponent]
})
export class KlyngenDataTableModule { }
