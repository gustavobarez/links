import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { Theme } from '../theme.service';
import { TypingEffectService } from '../typing-effect.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() showBackButton: boolean = false;
  public theme = inject(Theme);
  public languageService = inject(LanguageService);
  public typing = inject(TypingEffectService);
}
