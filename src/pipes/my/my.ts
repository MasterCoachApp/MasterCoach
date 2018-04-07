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
   * Takes a value and makes it lowercase.
   */
  // transform(value: string, ...args) {
  //   return value.toLowerCase();
  // }
  transform(value: any, args?: any): any {
      console.log('keys',Object.keys(value));
      console.log('object',value);
      return Object.keys(value);
  }
}
