import { Routes } from '@angular/router';
import { BookDetails } from './components/book-details/book-details';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent() {
            return import('./home/home').then(m => m.Home);
        },
    },
    {
        path: 'authors',
        pathMatch: 'full',
        loadComponent() {
            return import('./components/authors/authors').then(t => t.Authors);
        }
    },
    {
        path: 'aboutus',
        pathMatch: 'full',
        loadComponent() {
            return import('./components/about-us/about-us').then(t => t.AboutUs);
        }
    },
    {
        path: 'books',
        pathMatch: 'full',
        loadComponent() {
            return import('./book-list/book-list').then(t => t.BookList);
        }
    },
    {
        path: "book/:id",
        pathMatch: 'full',
        loadComponent() {
            return import('./components/book-details/book-details').then(t => t.BookDetails);
        }
    },

];
