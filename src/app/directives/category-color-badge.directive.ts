import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appCategoryColorBadge]'
})
export class CategoryColorBadgeDirective {
  color = input("black");
  private element = inject(ElementRef);
  styleEffect = effect(() => {
    this.element.nativeElement.style.backgroundColor = this.color();
  })
}
