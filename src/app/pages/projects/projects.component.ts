import { Component } from '@angular/core';
import { BackToTopComponent } from '../../shared/back-to-top/back-to-top.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, HeaderComponent, BackToTopComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
