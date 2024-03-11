import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};

// To run: open terminal
// Type: ng serve --open

// npm install @coreui/coreui
// npm install bootstrap
// npm install @coreui/angular@4