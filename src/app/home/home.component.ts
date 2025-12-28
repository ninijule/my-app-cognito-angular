import {Component, inject, OnInit} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  private readonly oidcSecurityService = inject(OidcSecurityService);
  userData$ = this.oidcSecurityService.userData$;

  ngOnInit(): void {
    this.oidcSecurityService.getUserData().subscribe((next) => {
      console.log(next);
      this.userData$ = next;
    });
  }


  logout(): void {
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }
    window.location.href = "https://us-east-1kubfat4be.auth.us-east-1.amazoncognito.com/logout?client_id=1h058c2eavvf0009qesi7p7hme&logout_uri=https://dq0w9rit642jh.cloudfront.net";
  }

}
