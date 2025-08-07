import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Header } from '../../shared/header/header';
import { LanguageService } from '../../shared/language.service';
import { Theme } from '../../shared/theme.service';
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
export class Home {
  private textData = {
    pt: {
      bio: 'Brasileiro obcecado por tecnologia há uma década. Trabalhando como Engenheiro de Software.',
      linkedinDetails: 'veja minha carreira',
      githubDetails: 'acompanhe meus projetos',
      articlesDetails: 'veja meus artigos',
      cvButton: 'Baixe meu CV',
    },
    en: {
      bio: 'Brazilian obsessed with technology for a decade. Working as a Software Engineer.',
      linkedinDetails: 'see my career',
      githubDetails: 'follow my projects',
      articlesDetails: 'see my articles',
      cvButton: 'Download my CV',
    },
  };
  public theme = inject(Theme);
  public languageService = inject(LanguageService);

  public content = computed(
    () => this.textData[this.languageService.currentLang()]
  );
}
