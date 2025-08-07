import { DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

export type SelectedLanguage = 'en' | 'pt';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private document = inject(DOCUMENT);
  private languageState = signal<SelectedLanguage>('en');
  public currentLang = this.languageState.asReadonly();

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      this.document.documentElement.lang = lang;
    })
  }

  toggleLanguage(): void {
    this.languageState.update((lang) => (lang === 'en' ? 'pt' : 'en'));
  }
}
