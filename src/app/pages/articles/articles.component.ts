import { Component, inject } from '@angular/core';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';
import { BackToTopComponent } from '../../shared/back-to-top/back-to-top.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HeaderComponent, BackToTopComponent, ArticleCardComponent],
  template: `
    <app-header [showBackButton]="true"></app-header>
    @if (translationService.isLoading()) {
    <div class="loading">Carregando...</div>
    } @else {
    <div class="projects-container">
      <h1>{{ translationService.articles().title }}</h1>

      <div class="projects-grid">
        @for (article of translationService.articles().items; track article.id)
        {
        <app-article-card [article]="article"></app-article-card>
        }
      </div>
    </div>
    }
    <app-back-to-top></app-back-to-top>
  `,
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {
  translationService = inject(TranslationService);
}
