import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

document.documentElement.className = 'light-theme';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

