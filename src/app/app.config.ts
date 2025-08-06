import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: APP_INITIALIZER,
      useFactory: (library: FaIconLibrary) => () => {
        library.addIcons(faGithub, faLinkedin, faNewspaper);
      },
      deps: [FaIconLibrary],
      multi: true
    }
  ]
};