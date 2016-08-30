import { PipeTransform, Pipe } from 'angular2/core';
import { ILens } from './lens';

@Pipe({
  name: 'lensFilter',
})

export class LensFilterPipe implements PipeTransform {
  transform(value : ILens[], args: string[]): ILens[]{
    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((lens: ILens) =>
      lens.brand.toLocaleLowerCase().indexOf(filter) != -1): value;
  }
}
