import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  standalone: false
})
export class ThemeToggleComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    const newTheme = this.themeService.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
    console.log(this.themeService.currentTheme);
  }

}
