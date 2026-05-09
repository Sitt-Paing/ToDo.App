import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse, LoginDto, RegisterDto, TokenDto } from "../models/auth.models";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7055/api/Account';

  private readonly accessTokenKey = "access_token";
  private readonly refreshTokenKey = "refresh_token";
  private readonly refreshTokenExpiryKey = 'refresh_token_expiry';

  login(dto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/Login`, dto).pipe(
      tap((response) => this.setSession(response)),
    );
  }

  register(dto: RegisterDto): Observable<string> {
    return this.http.post(`${this.apiUrl}/Register`, dto, { responseType: 'text' });
  }

  refreshToken(dto: TokenDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/RefreshToken`, dto).pipe(
      tap((response) => this.setSession(response)),
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/Logout`, {}).pipe(
      tap(() => this.clearSession()),
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setSession(authResponse: AuthResponse): void {
    localStorage.setItem(this.accessTokenKey, authResponse.accessToken);
    localStorage.setItem(this.refreshTokenKey, authResponse.refreshToken);
    localStorage.setItem(this.refreshTokenExpiryKey, authResponse.refreshTokenExpiry);
  }

  private clearSession(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.refreshTokenExpiryKey);
  }
}
