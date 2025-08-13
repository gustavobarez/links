import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LanguageService } from './language.service';

export interface Translation {
  home: any;
  projects: {
    title: string;
    items: Project[];
  };
  articles: {
    title: string;
    items: Article[];
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  websiteLink?: string;
  codeLink: string;
  viewWebsite: string;
  viewCode: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  categories: string[];
  image?: string;
  articleLink: string;
  viewArticle: string;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private http = inject(HttpClient);
  private languageService = inject(LanguageService);

  private translations = signal<Record<string, Translation>>({});
  private loading = signal(true);

  constructor() {
    this.loadTranslations();
  }

  private async loadTranslations() {
    try {
      const [pt, en] = await Promise.all([
        firstValueFrom(this.http.get<Translation>('/assets/i18n/pt.json')),
        firstValueFrom(this.http.get<Translation>('/assets/i18n/en.json')),
      ]);

      this.translations.set({ pt, en });
      this.loading.set(false);
    } catch (error) {
      console.log('Erro ao carregar traduções: ', error);
      this.loading.set(false);
    }
  }

  current = computed(() => {
    const lang = this.languageService.currentLang();
    const translations = this.translations();
    return translations[lang] as Translation;
  });

  home = computed(() => this.current()?.home || {});

  projects = computed(
    () => this.current()?.projects || { title: '', items: [] }
  );

  articles = computed(
    () => this.current()?.articles || { title: '', items: [] }
  );

  isLoading = computed(() => this.loading());
}
