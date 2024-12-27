import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private themeClass = localStorage.getItem('theme') || 'light-theme';

  setTheme(theme: 'light-theme' | 'dark-theme') {
    this.themeClass = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }

  get currentTheme(): string {
    return this.themeClass;
  }
}
