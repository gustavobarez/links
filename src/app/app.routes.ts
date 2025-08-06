import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Articles } from './pages/articles/articles';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'articles', component:  Articles },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
