import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 50, trial: string = "..."): string {
    return value.length > limit ? value.substring(0, limit) + trial : value;
  }

}
