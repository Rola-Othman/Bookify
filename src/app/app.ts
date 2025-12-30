import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink ,RouterLinkActive, HeaderComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Applicant-Tracker');
}
