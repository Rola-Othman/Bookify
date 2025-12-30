import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Book } from '../models/book.type';
import { catchError } from 'rxjs';
import { Category } from '../models/category.type';
import { Author } from '../models/author.type';
import { BookInfo } from '../models/book-info.type';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  http = inject(HttpClient);

  category_list = signal<Category[]>([
    { id: 1, name: 'Fiction', cat_code: 'fiction', color: '#909b61' },
    { id: 2, name: 'Non-Fiction', cat_code: 'non_fiction', color: '#c9936a' },
    { id: 3, name: 'Romance', cat_code: 'romance', color: '#c26b58' },
    { id: 4, name: 'Horror', cat_code: 'horror', color: '#759592' },
    { id: 5, name: 'Drama', cat_code: 'drama', color: '#df9317' },

    { id: 6, name: 'Mystery', cat_code: 'mystery', color: '#fa9753' },
    { id: 7, name: 'Fantasy', cat_code: 'fantasy', color: '#7d70ba' },
    { id: 8, name: 'Science Fiction', cat_code: 'science_fiction', color: '#9e484c' },
    { id: 9, name: 'Historical', cat_code: 'historical', color: '#90d9e6' },
    { id: 10, name: 'Biography', cat_code: 'biography', color: '#105966' },
    { id: 11, name: 'Self-Help', cat_code: 'self_help', color: '#715f46' },
    { id: 12, name: 'Children', cat_code: 'children', color: '#a25e00' },
    { id: 13, name: 'Adventure', cat_code: 'adventure', color: '#b39592' },
    { id: 14, name: 'Sci-Fi', cat_code: 'sci-fi', color: '#790404' },
    { id: 15, name: 'Thriller', cat_code: 'thriller', color: '#79736d' },
  ]);

  author_list = signal<Author[]>([
    { id: 1, name: 'J.K. Rowling', DOB: new Date(1990, 10, 18) },
    { id: 2, name: 'Rick Riordan', DOB: new Date(1990, 10, 18) },
    { id: 3, name: 'J.R.R. Tolkien', DOB: new Date(1990, 10, 18) },

    { id: 4, name: 'Jane Austen', DOB: new Date(1990, 10, 18) },
    { id: 5, name: 'Nicholas Sparks', DOB: new Date(1990, 10, 18) },
    { id: 6, name: 'Jojo Moyes', DOB: new Date(1990, 10, 18) },

    { id: 7, name: 'Gillian Flynn', DOB: new Date(1990, 10, 18) },
    { id: 8, name: 'Arthur Conan Doyle', DOB: new Date(1990, 10, 18) },

    { id: 9, name: 'Frank Herbert', DOB: new Date(1990, 10, 18) },
    { id: 10, name: 'Orson Scott Card', DOB: new Date(1990, 10, 18) },
    { id: 11, name: 'Suzanne Collins', DOB: new Date(1990, 10, 18) },

    { id: 12, name: 'Markus Zusak', DOB: new Date(1990, 10, 18) },
    { id: 13, name: 'Anthony Doerr', DOB: new Date(1990, 10, 18) },
    { id: 14, name: 'Kristin Hannah', DOB: new Date(1990, 10, 18) },

    { id: 15, name: 'Daphne du Maurier', DOB: new Date(1990, 10, 18) },
    { id: 16, name: 'Charlotte Brontë', DOB: new Date(1990, 10, 18) },
    { id: 17, name: 'Liane Moriarty', DOB: new Date(1990, 10, 18) },

    { id: 18, name: 'Stephen King', DOB: new Date(1990, 10, 18) },
    { id: 19, name: 'Josh Malerman', DOB: new Date(1990, 10, 18) },

    { id: 20, name: 'Michelle Obama', DOB: new Date(1990, 10, 18) },
    { id: 21, name: 'Walter Isaacson', DOB: new Date(1990, 10, 18) },
    { id: 22, name: 'Stephen R. Covey', DOB: new Date(1990, 10, 18) },

    { id: 23, name: 'Ian McEwan', DOB: new Date(1990, 10, 18) },
    { id: 24, name: 'Diana Gabaldon', DOB: new Date(1990, 10, 18) },
    { id: 25, name: 'John Green', DOB: new Date(1990, 10, 18) },

    { id: 26, name: 'Lewis Carroll', DOB: new Date(1990, 10, 18) },
    { id: 27, name: 'E.B. White', DOB: new Date(1990, 10, 18) },
    { id: 28, name: 'Roald Dahl', DOB: new Date(1990, 10, 18) },

    { id: 29, name: 'Andy Weir', DOB: new Date(1990, 10, 18) },
    { id: 30, name: 'Ernest Cline', DOB: new Date(1990, 10, 18) },
    { id: 31, name: 'Blake Crouch', DOB: new Date(1990, 10, 18) },

    { id: 32, name: 'Tara Westover', DOB: new Date(1990, 10, 18) },
    { id: 33, name: 'Trevor Noah', DOB: new Date(1990, 10, 18) },
    { id: 34, name: 'Ashlee Vance', DOB: new Date(1990, 10, 18) },
    { id: 35, name: 'Stieg Larsson', DOB: new Date(1990, 10, 18) },
  ]);

  book_list = signal<Book[]>([
    { id: 1, author_id: 1, category_ids: [7, 13], name: 'Harry Potter', description: 'Harry, an orphan, discovers he is a wizard and attends Hogwarts. He faces magical challenges and learns about friendship and courage. A classic magical adventure for all ages.' },
    { id: 2, author_id: 2, category_ids: [7, 13], name: 'Percy Jackson & the Olympians', description: 'Percy discovers he is a demigod and goes on quests to fight mythical monsters. Combines Greek mythology with modern adventures. Fun and action-packed for young readers.' },
    { id: 3, author_id: 3, category_ids: [7, 13], name: 'The Hobbit', description: 'Bilbo Baggins embarks on a journey with dwarves to reclaim treasure. A classic tale of adventure, courage, and friendship. Full of imaginative landscapes and creatures.' },

    { id: 4, author_id: 4, category_ids: [3, 5], name: 'Pride and Prejudice', description: 'Elizabeth Bennet navigates love and social expectations. Explores pride, prejudice, and family dynamics. A timeless romantic drama classic.' },
    { id: 5, author_id: 5, category_ids: [3, 5], name: 'The Notebook', description: 'A lifelong love story unfolds between Noah and Allie. Focuses on enduring love, memory, and emotional challenges. A touching romantic story.' },
    { id: 6, author_id: 6, category_ids: [3, 5], name: 'Me Before You', description: 'Louisa cares for Will, who is facing life-changing challenges. A story of love, loss, and personal growth. Heartfelt and emotional.' },

    { id: 7, author_id: 7, category_ids: [6, 15], name: 'Gone Girl', description: 'A woman disappears under mysterious circumstances. Full of twists, secrets, and suspenseful revelations. A gripping psychological thriller.' },
    { id: 8, author_id: 35, category_ids: [6, 15], name: 'The Girl with the Dragon Tattoo', description: 'A journalist and hacker investigate a decades-old disappearance. Combines mystery, intrigue, and complex characters. A dark and thrilling read.' },
    { id: 9, author_id: 8, category_ids: [6, 15], name: 'Sherlock Holmes', description: 'Follows detective Sherlock Holmes solving intricate cases. Full of deduction, suspense, and clever mysteries. A classic in crime fiction.' },

    { id: 10, author_id: 9, category_ids: [7, 14], name: 'Dune', description: 'Set on desert planet Arrakis, families compete for control. Blends politics, religion, and adventure. A sci-fi epic with philosophical depth.' },
    { id: 11, author_id: 10, category_ids: [7, 14], name: 'Ender’s Game', description: 'Young Ender Wiggin trains in a military school to fight alien invaders. Combines strategy, action, and moral dilemmas. A sci-fi classic for all ages.' },
    { id: 12, author_id: 11, category_ids: [7, 14], name: 'The Hunger Games', description: 'Katniss fights for survival in a deadly televised competition. Explores courage, rebellion, and societal inequality. An intense dystopian adventure.' },

    { id: 13, author_id: 12, category_ids: [1, 9], name: 'The Book Thief', description: 'A girl in Nazi Germany learns to read and changes lives around her. Narrated uniquely, sometimes by Death. A moving story of war, courage, and words.' },
    { id: 14, author_id: 13, category_ids: [1, 9], name: 'All the Light We Cannot See', description: 'Follows a blind French girl and German soldier during WWII. Explores survival, morality, and human connection. Beautifully written historical fiction.' },
    { id: 15, author_id: 14, category_ids: [1, 9], name: 'The Nightingale', description: 'Sisters in Nazi-occupied France endure hardships and resistance. Explores love, family, and bravery. An emotional story of survival and sacrifice.' },

    { id: 16, author_id: 15, category_ids: [3, 6], name: 'Rebecca', description: 'A young woman marries a mysterious man and uncovers dark secrets in his mansion. Combines love and suspense. A classic romantic mystery.' },
    { id: 17, author_id: 16, category_ids: [3, 6], name: 'Jane Eyre', description: 'Jane navigates love, morality, and hardship while working for Mr. Rochester. Themes of romance and mystery intertwine. A timeless classic.' },
    { id: 18, author_id: 17, category_ids: [3, 6], name: 'Big Little Lies', description: 'Follows intertwined lives of women with dark secrets. Blends romance, suspense, and social drama. Gripping and contemporary.' },

    { id: 19, author_id: 18, category_ids: [4, 15], name: 'It', description: 'Children face a terrifying entity called Pennywise. Combines horror, suspense, and friendship. A chilling classic of horror fiction.' },
    { id: 20, author_id: 18, category_ids: [4, 15], name: 'The Shining', description: 'A family isolated in a haunted hotel experiences terrifying events. Psychological and supernatural horror blend. Suspenseful and intense.' },
    { id: 21, author_id: 19, category_ids: [4, 15], name: 'Bird Box', description: 'A mysterious force causes mass suicides; survivors must navigate blindfolded. Combines survival, suspense, and terror. A tense thriller.' },

    { id: 22, author_id: 20, category_ids: [10, 11], name: 'Becoming', description: 'Michelle Obama shares her life journey and lessons. Inspires personal growth, resilience, and self-discovery. Motivational and relatable.' },
    { id: 23, author_id: 21, category_ids: [10, 11], name: 'Steve Jobs', description: 'Chronicles Steve Jobs’ life and career at Apple. Highlights innovation, leadership, and challenges. Inspires creativity and entrepreneurship.' },
    { id: 24, author_id: 22, category_ids: [10, 11], name: 'The 7 Habits of Highly Effective People', description: 'Offers principles for personal and professional effectiveness. Focuses on habits that improve productivity and relationships. Practical self-help classic.' },

    { id: 25, author_id: 23, category_ids: [3, 5], name: 'Atonement', description: 'Explores love, betrayal, and consequences over decades. Emotional depth and complex characters drive the story. A moving romantic drama.' },
    { id: 26, author_id: 24, category_ids: [3, 5], name: 'Outlander', description: 'A woman travels through time and falls in love in 18th-century Scotland. Blends romance, drama, and historical adventure. Richly detailed and engaging.' },
    { id: 27, author_id: 25, category_ids: [3, 5], name: 'The Fault in Our Stars', description: 'Teenagers with illness navigate love and life’s challenges. Emotional, touching, and relatable. A modern romantic drama favorite.' },

    { id: 28, author_id: 26, category_ids: [7, 12], name: 'Alice’s Adventures in Wonderland', description: 'Alice enters a magical world full of strange creatures and adventures. Imaginative, humorous, and whimsical. A classic stimulating creativity.' },
    { id: 29, author_id: 27, category_ids: [7, 12], name: 'Charlotte’s Web', description: 'A pig named Wilbur and a spider named Charlotte form an unlikely friendship. Teaches lessons on kindness, friendship, and life. Heartwarming for children.' },
    { id: 30, author_id: 28, category_ids: [7, 12], name: 'Matilda', description: 'Matilda, a gifted girl, overcomes a harsh family and school. Combines humor, magic, and empowerment. Inspires courage and cleverness.' },

    { id: 31, author_id: 29, category_ids: [6, 14], name: 'The Martian', description: 'An astronaut stranded on Mars must use science to survive. Combines suspense, problem-solving, and adventure. Exciting and clever sci-fi story.' },
    { id: 32, author_id: 30, category_ids: [6, 14], name: 'Ready Player One', description: 'A virtual reality game holds the key to a fortune. Combines mystery, adventure, and 80s pop culture. Fast-paced and fun sci-fi tale.' },
    { id: 33, author_id: 31, category_ids: [6, 14], name: 'Dark Matter', description: 'A man is thrust into alternate realities and must find his true life. Blends suspense, sci-fi, and philosophical questions. Mind-bending and thrilling.' },

    { id: 34, author_id: 32, category_ids: [10, 2], name: 'Educated', description: 'Tara grows up in an isolated family and educates herself against the odds. Explores determination, self-growth, and resilience. Inspiring real-life story.' },
    { id: 35, author_id: 33, category_ids: [10, 2], name: 'Born a Crime', description: 'Trevor Noah shares his childhood under apartheid in South Africa. Humorous yet thought-provoking stories about race and identity. Entertaining and insightful.' },
    { id: 36, author_id: 34, category_ids: [10, 2], name: 'Elon Musk: Tesla, SpaceX…', description: 'Chronicles Elon Musk’s life and ventures in tech and space. Highlights innovation, risk-taking, and vision. Motivational biography for tech enthusiasts.' },

  ]);

  getBooks() {
    const URL = 'https://dummyjson.com/c/90bc-7f86-410e-8300';
    return this.http.get<Book[]>(URL).pipe(
      catchError(error => {
        console.error('Error fetching todos:', error);
        throw error;
      })
    );
  }
  book_infos = signal<BookInfo[]>([]);

  retriveBookInfo(): BookInfo[] {
    const myBookInfo = this.book_list().map(book => {
      const author_name = this.author_list().find(author => author.id === book.author_id)?.name || 'Unknown Author';
      const categoriesList = this.category_list().filter(category => book.category_ids.includes(category.id))
        .map(cat => ({ name: cat.name, color: cat.color }));

      return {
        bookId: book.id,
        bookName: book.name,
        description: book.description,
        authorName: author_name,
        categories: categoriesList,
      };
    });
    return myBookInfo;
  }

  retriveCategoryInfo(): Category[] {
    return this.category_list();
  }
}
//ng generate directive category-color-bagde

// ng generate class models/authors --type=model
