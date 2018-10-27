import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {
  transform(value: any, args: Array<any>): string {
    return moment(value).fromNow();
  }
}

export const fromNowPipeInjectables: Array<any> = [
  FromNowPipe
];
