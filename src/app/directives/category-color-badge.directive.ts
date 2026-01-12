import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appCategoryColorBadge]'
})
// Directive to set the background color of an element based on the provided category color
export class CategoryColorBadgeDirective {
  color = input("black");
  private element = inject(ElementRef);
  styleEffect = effect(() => {
    this.element.nativeElement.style.backgroundColor = this.color();
  })
}
