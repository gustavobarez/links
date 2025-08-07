import { Component, HostListener, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.scss',
})
export class BackToTop {
  isVisible = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset > 200) {
      this.isVisible.set(true);
    } else {
      this.isVisible.set(false);
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
