import { Component, inject } from '@angular/core';
import { BackToTopComponent } from '../../shared/back-to-top/back-to-top.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, HeaderComponent, BackToTopComponent],
  template: `
    <app-header [showBackButton]="true"></app-header>
    @if (translationService.isLoading()) {
    <div class="loading">Carregando...</div>
    } @else {
    <div class="projects-container">
      <h1>{{ translationService.projects().title }}</h1>

      <div class="projects-grid">
        @for (project of translationService.projects().items; track project.id)
        {
        <app-project-card [project]="project"></app-project-card>
        }
      </div>
    </div>
    }
    <app-back-to-top></app-back-to-top>
  `,
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  translationService = inject(TranslationService);
}
