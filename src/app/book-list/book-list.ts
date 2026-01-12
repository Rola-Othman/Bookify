import { Component, inject, OnInit, signal } from '@angular/core';
import { Book } from '../models/book.type';
import { BooksService } from '../services/books-service';
import { BookInfo } from '../models/book-info.type';
import { Category } from '../models/category.type';
import { AppBookCard } from '../components/app-book-card/app-book-card';
import { FilterBooksPipe } from '../pipes/filter-books-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  imports: [AppBookCard, FilterBooksPipe, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books_Service = inject(BooksService);
  bookList = signal<Book[]>([]);
  bookInfoList = signal<BookInfo[]>([]);
  bookCategoryList = signal<Category[]>([]);
  categoryId = signal<number>(0);
  ngOnInit(): void {
    const info = this.books_Service.retriveBookInfo();
    const categoryList = this.books_Service.retriveCategoryInfo();

    this.bookInfoList.set(info);
    this.bookCategoryList.set(categoryList);
  }

  setCategoryId(id: number | null) {
    this.categoryId.set(id  ?? 0);
  }
}
