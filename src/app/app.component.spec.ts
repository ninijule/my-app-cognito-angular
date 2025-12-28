import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {of} from 'rxjs';



describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: OidcSecurityService,
          useValue: {
            checkAuth: () => of({isAuthenticated: false}),
            authorize: 'jest.fn()',
            logoff: 'jest.fn()'
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
