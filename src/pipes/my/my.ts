import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keys',
})
export class MyPipe implements PipeTransform {
  /**
   * Takes an object and returns its keys
   */
  transform(value: any, args?: any): any {
      return Object.keys(value)
  }
}
