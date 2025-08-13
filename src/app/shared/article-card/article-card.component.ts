import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Article } from '../translation.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent {
  @Input({ required: true }) article!: Article;
}
