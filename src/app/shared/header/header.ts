import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  Input,
  OnDestroy,
  OnInit,
  signal,
  computed,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Theme } from '../../services/theme';
import { Language } from '../../services/language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
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
  
  public theme = inject(Theme);
  public language = inject(Language);

  private titles = computed(
    () => this.textData[this.language.currentLang()].titles
  );

  public displayedTitle = signal('');

  private titleIndex = 0;
  private charIndex = 0;
  private typingTimeout: any;

  constructor() {
    effect(() => {
      this.language.currentLang();

      clearTimeout(this.typingTimeout);
      this.titleIndex = 0;
      this.charIndex = 0;
      this.displayedTitle.set('');
      this.typeEffect();
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    clearTimeout(this.typingTimeout);
  }

  private typeEffect(): void {
    const currentTitleList = this.titles();
    if (this.titleIndex >= currentTitleList.length) return;

    const currentTitle = currentTitleList[this.titleIndex];
    const typingSpeed = 120;
    const pauseDuration = 2000;

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
