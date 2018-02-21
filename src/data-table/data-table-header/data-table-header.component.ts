import { Component, Inject, forwardRef, HostListener } from '@angular/core';
import { DataTableComponent } from '../data-table.component';
import { HEADER_TEMPLATE } from './data-table-header.template';
import { HEADER_STYLE } from './data-table-header.style';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-table-header',
  template: HEADER_TEMPLATE,
  styles: [ HEADER_STYLE ]
})
export class DataTableHeaderComponent {
  public columnSelectorOpen = false;

  // tslint:disable-next-line:no-forward-ref
  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent) { }

  @HostListener('click') public onClick() {
    this.columnSelectorOpen = false;
  }

}
