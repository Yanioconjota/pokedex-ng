import { Component } from '@angular/core';
import { ThemeService } from './modules/shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'pokedex-ng';
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    const newTheme = this.themeService.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
    console.log(this.themeService.currentTheme);
  }
}
