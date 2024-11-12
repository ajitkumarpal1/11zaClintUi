import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() name: string = '';  // Input property to accept the name
  @Input() size: number = 36;  // Input property to accept the size
  initials: string = '';  // Variable to hold initials

  ngOnChanges() {
    this.initials = this.getInitials(this.name);
  }

  // Function to extract initials
  getInitials(name: string): string {
    if (!name) return '';

    const words = name.trim().split(' ');

    // If there's only one word, take the first two letters
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    // Otherwise, take the first letter of the first two words
    return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase();
  }
}
