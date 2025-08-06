// src/app/services/theme.service.ts

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private renderer: Renderer2;
  public currentTheme: 'dark-theme' | 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.currentTheme =
      (localStorage.getItem('theme') as 'dark-theme' | 'light-theme') ||
      'dark-theme';

    this.renderer.addClass(document.body, this.currentTheme);
  }

  toggleTheme() {
    const previousTheme = this.currentTheme;
    this.currentTheme =
      this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

    this.renderer.removeClass(document.body, previousTheme);
    this.renderer.addClass(document.body, this.currentTheme);

    localStorage.setItem('theme', this.currentTheme);
  }

  isDarkMode(): boolean {
    return this.currentTheme === 'dark-theme';
  }
}
