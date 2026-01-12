import { Pipe, PipeTransform } from '@angular/core';
import { BookInfo } from '../models/book-info.type';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: BookInfo[], categoryId: number): BookInfo[] {
    return categoryId === 0
      ? books
      : books.filter(b => b.categories.some(c => c.id === categoryId));
  }

}
