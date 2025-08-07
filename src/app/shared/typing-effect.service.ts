import { computed, inject, Injectable, signal } from '@angular/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class TypingEffectService {
  private languageService = inject(LanguageService);

  private textData = {
    pt: {
      titles: [
        'Engenheiro de Software',
        'Desenvolvedor Full Stack',
        'Desenvolvedor Frontend',
        'Desenvolvedor Backend',
      ],
    },
    en: {
      titles: [
        'Software Engineer',
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer',
      ],
    },
  };

  private titles = computed(
    () => this.textData[this.languageService.currentLang()].titles
  );
  public displayedTitle = signal('');

  private titleIndex = 0;
  private charIndex = 0;
  private typingTimeout: any;

  start(): void {
    this.typeEffect();
  }

  private typeEffect(): void {
    const currentTitleList = this.titles();
    if (!currentTitleList || this.titleIndex >= currentTitleList.length) return;

    const currentTitle = currentTitleList[this.titleIndex];
    const typingSpeed = 120;
    const pauseDuration = 1000;

    if (this.charIndex < currentTitle.length) {
      this.displayedTitle.set(currentTitle.substring(0, this.charIndex + 1));
      this.charIndex++;
      this.typingTimeout = setTimeout(() => this.typeEffect(), typingSpeed);
    } else {
      this.typingTimeout = setTimeout(() => {
        this.titleIndex = (this.titleIndex + 1) % currentTitleList.length;
        this.charIndex = 0;
        this.displayedTitle.set('');
        this.typeEffect();
      }, pauseDuration);
    }
  }
}
