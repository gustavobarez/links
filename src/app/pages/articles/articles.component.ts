import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../shared/article-card/article-card.component';
import { BackToTopComponent } from '../../shared/back-to-top/back-to-top.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HeaderComponent, BackToTopComponent, ArticleCardComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent {}
