import { DataTableComponent } from './data-table/data-table.component';
import { DataTableRowComponent } from './data-table/data-table-row/data-table-row.component';
import { DataTableHeaderComponent } from './data-table/data-table-header/data-table-header.component';
import { DataTablePaginationComponent } from './data-table/data-table-pagination/data-table-pagination.component';
import { DataTableColumnDirective } from './shared/directive/data-table-column.directive';
import { CellCallback } from './shared/types/cell-callback.type';
import { IDataTableParams } from './shared/types/data-table-params.type';
import { IDataTableTranslations } from './shared/types/data-table-translations.type';
import { defaultTranslations } from './shared/types/default-translations.type';
import { RowCallback } from './shared/types/row-callback.type';

export { DataTableModule } from './data-table.module';
export * from './shared/tools/data-table-resource';
export {
    DataTableComponent,
    DataTableColumnDirective,
    DataTableRowComponent,
    DataTablePaginationComponent,
    IDataTableParams,
    DataTableHeaderComponent,
    IDataTableTranslations,
    CellCallback,
    RowCallback,
    defaultTranslations
};
export const DATA_TABLE_DIRECTIVES = [DataTableComponent, DataTableColumnDirective];
