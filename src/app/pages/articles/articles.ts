import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { BackToTop } from '../../shared/back-to-top/back-to-top';
import { ArticleCard } from "../../shared/article-card/article-card";

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [Header, BackToTop, ArticleCard],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {}
