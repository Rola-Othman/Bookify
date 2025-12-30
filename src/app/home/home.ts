import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BookList } from '../book-list/book-list';
// import { Authors } from '../components/authors/authors';
// import { AboutUs } from '../components/about-us/about-us';
@Component({
  selector: 'app-home',
  imports: [BookList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
