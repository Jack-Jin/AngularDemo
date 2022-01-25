import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'c0702GreetingPipe'
})
export class C0702GreetingPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}`;
  }

}
