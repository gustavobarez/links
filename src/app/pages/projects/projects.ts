import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Header } from '../../shared/header/header';
import { BackToTop } from '../../components/back-to-top/back-to-top';

@Component({
  selector: 'app-projects',
  imports: [ ProjectCard, Header, BackToTop ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
