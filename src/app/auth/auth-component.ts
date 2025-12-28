import {Component, inject} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-auth-component',
  imports: [],
  templateUrl: './auth-component.html',
  styleUrl: './auth-component.scss',
})
export class AuthComponent {

  private readonly oidcSecurityService = inject(OidcSecurityService);

  login(): void {
    this.oidcSecurityService.authorize();
  }
}
