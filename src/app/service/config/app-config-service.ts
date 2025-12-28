import { Injectable } from '@angular/core';

export interface OidcConfig {
  authority: string;
  clientId: string;
  redirectUrl: string;
  postLogoutRedirectUri: string;
  scope: string;
  responseType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private config!: { oidc: OidcConfig };

  async load(): Promise<void> {
    const res = await fetch('/assets/config/app-config.json');
    if (!res.ok) {
      throw new Error('Failed to load app-config.json');
    }
    this.config = await res.json();
  }

  get oidc(): OidcConfig {
    return this.config.oidc;
  }
}
