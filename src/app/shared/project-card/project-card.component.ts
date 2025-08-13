import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Project } from '../translation.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({required: true}) project!: Project;
}
