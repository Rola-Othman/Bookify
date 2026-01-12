import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  private router = inject(Router);

  goToBooks(){
    this.router.navigate(['/books']);
  }
}
