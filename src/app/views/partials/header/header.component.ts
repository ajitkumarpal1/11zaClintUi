import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AvatarComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentRoute: string = '';
  isMenuOpen: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Get the current active route
      this.currentRoute = this.router.url;
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route; // Check if the route matches the current route
  }


  toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('tw-hidden');
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
