import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-projects',
  imports: [ ProjectCard, Header ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
