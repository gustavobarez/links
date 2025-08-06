import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Theme } from '../../services/theme';

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
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  textData: any = {
    pt: {
      name: 'Gustavo Barez',
      title: 'Engenheiro de Software',
      bio: 'Brasileiro obcecado por tecnologia há uma década. Trabalhando como Engenheiro de Software.',
      linkedinDetails: 'veja minha carreira',
      githubDetails: 'acompanhe meus projetos',
      articlesDetails: 'veja meus artigos',
      cvButton: 'Baixe meu CV',
    },
    en: {
      name: 'Gustavo Barez',
      title: 'Software Engineer',
      bio: 'Brazilian obsessed with technology for a decade. Working as a Software Engineer.',
      linkedinDetails: 'see my career',
      githubDetails: 'follow my projects',
      articlesDetails: 'see my articles',
      cvButton: 'Download my CV',
    },
  };

  currentLang: 'pt' | 'en' = 'en';
  content = this.textData.en;

  constructor(public theme: Theme) {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('language') as 'pt' | 'en';
    if (savedLang) {
      this.currentLang = savedLang;
      this.content = this.textData[this.currentLang];
    }
  }

  toggleTheme(): void {
    this.theme.toggleTheme();
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'pt' : 'en';
    this.content = this.textData[this.currentLang];
    localStorage.setItem('language', this.currentLang);
  }
}
