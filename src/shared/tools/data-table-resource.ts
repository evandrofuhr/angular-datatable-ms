import { IDataTableParams } from '../types/data-table-params.type';

export class DataTableResource<T> {

    constructor(private items: T[]) { }

    public query(params: IDataTableParams, filter?: (item: T, index: number, items: T[]) => boolean): Promise<T[]> {

        let result: T[] = [];
        if (filter) {
            result = this.items.filter(filter);
        } else {
            result = this.items.slice(); // shallow copy to use for sorting instead of changing the original
        }

        if (params.sortBy) {
            result.sort((a: IDataTableParams, b: IDataTableParams) => {
                if (typeof a[params.sortBy!] === 'string') {
                    return a[params.sortBy!].localeCompare(b[params.sortBy!]);
                } else {
                    return a[params.sortBy!] - b[params.sortBy!];
                }
            });
            if (params.sortAsc === false) {
                result.reverse();
            }
        }
        if (params.offset !== undefined) {
            if (params.limit === undefined) {
                result = result.slice(params.offset, result.length);
            } else {
                result = result.slice(params.offset, params.offset + params.limit);
            }
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result));
        });
    }

    public count(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.items.length));
        });

    }
}
