import { Component, computed, inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books-service';
import { CategoryColorBadgeDirective } from '../../directives/category-color-badge.directive';
import { AppBookCard } from '../app-book-card/app-book-card';

@Component({
  selector: 'app-book-details',
  imports: [CategoryColorBadgeDirective, AppBookCard],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {
  private booksService = inject(BooksService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  bookId = computed(() => Number(this.route.snapshot.paramMap.get('id')));

  bookInfo = computed(() => {
    const id = this.bookId();
    return id
      ? this.booksService.getBookInfoById(id)
      : null;
  });

  backToHome() {
    this.router.navigate(['/']);
  }
}