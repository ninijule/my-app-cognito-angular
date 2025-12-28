import {Component, inject} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
})
export class LogoutComponent {

  private readonly oidcSecurityService = inject(OidcSecurityService);

  constructor() {
    //this.oidcSecurityService.logoff().subscribe((result) => console.log(result)); Azerty1234.
    // if (window.sessionStorage) {
    //   window.sessionStorage.clear();
    // }
    //
    // window.location.href = "https://us-east-1kubfat4be.auth.us-east-1.amazoncognito.com/logout?client_id=1h058c2eavvf0009qesi7p7hme&logout_uri=http://localhost/logout";

  }

}
