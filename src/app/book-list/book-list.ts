import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../models/book.type';
import { BooksService } from '../services/books-service';
import { BookInfo } from '../models/book-info.type';
import { Highlight } from '../highlight';
import { CategoryColorBadgeDirective } from '../directives/category-color-badge.directive';
import { Category } from '../models/category.type';

@Component({
  selector: 'app-book-list',
  imports: [Highlight, CategoryColorBadgeDirective],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books_Service = inject(BooksService);
  bookList = signal<Book[]>([]);
  bookInfoList = signal<BookInfo[]>([])
  bookCategoryList = signal<Category[]>([])
  ngOnInit(): void {
    // this.books_Service.getBooks().subscribe(book => {
    //   this.bookList.set(book);

    // })
  //  this.bookInfoList = this.books_Service.retriveBookInfo();
  const info = this.books_Service.retriveBookInfo();
  const categoryList = this.books_Service.retriveCategoryInfo();

    this.bookInfoList.set(info);
    this.bookCategoryList.set(categoryList);
  }
}
