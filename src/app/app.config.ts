import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAuth} from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAuth(
      {
        config: {
          authority: 'https://cognito-idp.eu-west-3.amazonaws.com/eu-west-3_nNnGDKr1s',
          redirectUrl: 'https://dq0w9rit642jh.cloudfront.net',
          clientId: '7b0dsbicm69k77apg5vfltiahi',
          scope: 'email openid phone',
          responseType: 'code',
        }
      }
    ),
    provideRouter(routes)
  ]
};
