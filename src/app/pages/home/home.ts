import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Theme } from '../../services/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Header } from '../../shared/header/header';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    FontAwesomeModule,
    Header,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  textData: any = {
    pt: {
      name: 'Gustavo Barez',
      titles: [
        'Engenheiro de Software',
        'Desenvolvedor Full Stack',
        'Desenvolvedor Frontend',
        'Desenvolvedor Backend',
      ],
      bio: 'Brasileiro obcecado por tecnologia há uma década. Trabalhando como Engenheiro de Software.',
      linkedinDetails: 'veja minha carreira',
      githubDetails: 'acompanhe meus projetos',
      articlesDetails: 'veja meus artigos',
      cvButton: 'Baixe meu CV',
    },
    en: {
      name: 'Gustavo Barez',
      titles: [
        'Software Engineer',
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer',
      ],
      bio: 'Brazilian obsessed with technology for a decade. Working as a Software Engineer.',
      linkedinDetails: 'see my career',
      githubDetails: 'follow my projects',
      articlesDetails: 'see my articles',
      cvButton: 'Download my CV',
    },
  };
  currentLang: 'pt' | 'en' = 'en';
  content = this.textData.en;
  currentTitle: string = '';
  currentTitleIndex: number = 0;
  currentCharIndex: number = 0;
  isTyping: boolean = true;
  typingInterval: any;

  constructor(public theme: Theme) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language') as 'pt' | 'en';
    if (savedLang) {
      this.currentLang = savedLang;
      this.content = this.textData[this.currentLang];
    }
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation(): void {
    this.typingInterval = setInterval(() => {
      if (this.isTyping) {
        if (
          this.currentCharIndex <
          this.content.titles[this.currentTitleIndex].length
        ) {
          this.currentTitle +=
            this.content.titles[this.currentTitleIndex][this.currentCharIndex];
          this.currentCharIndex++;
        } else {
          this.isTyping = false;
          setTimeout(() => {
            if (!this.isTyping) {
              this.isTyping = true;
              this.currentTitle = '';
              this.currentCharIndex = 0;
              this.currentTitleIndex =
                (this.currentTitleIndex + 1) % this.content.titles.length;
            }
          }, 2000);
        }
      }
    }, 100);
  }

  toggleTheme(): void {
    this.theme.toggleTheme();
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
    this.content = this.textData[this.currentLang];
    localStorage.setItem('language', this.currentLang);
    this.currentTitle = '';
    this.currentCharIndex = 0;
    this.isTyping = true;
  }
}
