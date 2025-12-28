import {Component, inject, OnInit, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  protected readonly title = signal('my-app');

  private readonly oidcSecurityService = inject(OidcSecurityService);
  private readonly routingService = inject(Router);
  isAuthenticated = false;

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) => {
      this.isAuthenticated = isAuthenticated;
      if(isAuthenticated) {
        this.routingService.navigate(['/home']);
      }
      console.log(isAuthenticated);
      console.log(userData);
    });
  }
}
