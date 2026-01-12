import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { BookInfo } from '../../models/book-info.type';
import { CategoryColorBadgeDirective } from '../../directives/category-color-badge.directive';
import { Router, RouterLink } from '@angular/router';
import { TextTruncatePipe } from '../../pipes/text-truncate-pipe';

@Component({
  selector: 'app-app-book-card',
  imports: [CategoryColorBadgeDirective, RouterLink],
  templateUrl: './app-book-card.html',
  styleUrl: './app-book-card.css',
  providers:[TextTruncatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppBookCard {
  item = input.required<BookInfo>();
  isExploreBtn = input.required<boolean>();
  private textTruncatePipe = inject(TextTruncatePipe);
  private router = inject(Router);

  buttonHtml= computed(() => {
    return this.isExploreBtn()
      ? `<button (click)="goToBookDetails(${this.item().bookId})" class="btn btn-dark btn-explore">Explore</button>`
      : `<button (click)="backToHome()" class="btn btn-dark btn-explore">Back</button>`;
  });

  description = computed(() => {
    return this.isExploreBtn()
      ? this.textTruncatePipe.transform(this.item().description)
      : this.item().description
  });

  goToBookDetails(id: number) {
    this.router.navigate(['/book', id]);
  }
  backToHome() {
    this.router.navigate(['/']);
  }
}
