import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookCard } from './app-book-card';

describe('AppBookCard', () => {
  let component: AppBookCard;
  let fixture: ComponentFixture<AppBookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBookCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
