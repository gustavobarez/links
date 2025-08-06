import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() isDarkMode: boolean = false;
  @Input() currentLang: string = 'en';

  @Output() themeToggled = new EventEmitter<void>();
  @Output() languageToggled = new EventEmitter<void>();
}