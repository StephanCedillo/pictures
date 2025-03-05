import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darknessFilter'
})
export class DarknessFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
