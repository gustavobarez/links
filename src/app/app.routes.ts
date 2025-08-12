import { Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
