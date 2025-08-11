import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
})
export class ArticleCard {}
