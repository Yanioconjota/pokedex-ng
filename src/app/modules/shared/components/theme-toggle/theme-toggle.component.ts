import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  standalone: false
})
export class ThemeToggleComponent {

  isChecked = false;

  constructor(private readonly themeService: ThemeService) {
    if (this.themeService.currentTheme === 'dark-theme') {
      this.themeService.setTheme('dark-theme');
      this.isChecked = true;
    }
  }

  toggleTheme(): void {
    const newTheme = this.themeService.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
  }

}
