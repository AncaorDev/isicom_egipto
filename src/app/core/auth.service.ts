import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Tokens } from '../shared/global.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly JWT_TOKEN = 'JWT_TOKEN';
    private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
    private loggedUser: string;

    constructor(private http: HttpClient) {}

    login(dynamic_key?:string): Observable<boolean> {
		return this.http.post<any>(`${environment.url_back}api/${environment.version_back}/seller/login`, {dynamic_key})
		  .pipe(
			tap(tokens => this.doLoginUser(tokens)),
			mapTo(true));
	}

    logout() {
        return this.http.post<any>(`${environment.url_back}api/${environment.version_back}/seller/logout`, {
            'refresh_token' : this.getRefreshToken()
        }).pipe(
            tap(() => this.doLogoutUser()),
            mapTo(true),
            catchError(error => {
            alert(error.error);
            return of(false);
        }));
    }

    isLoggedIn() {
        return !!this.getJwtToken();
    }

    refreshToken() {
        return this.http.post<any>(`${environment.url_back}api/${environment.version_back}/seller/refresh`, {
            'refresh_token': this.getRefreshToken()
        }).pipe(tap((tokens: Tokens) => {
            this.storeJwtToken(tokens.token);
        }));
    }

    getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }

    private doLoginUser(tokens: Tokens) {
        // this.loggedUser = username;
        this.storeTokens(tokens);
    }

    private doLogoutUser() {
        this.loggedUser = null;
        this.removeTokens();
    }

    private getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }

    private storeJwtToken(jwt: string) {
        localStorage.setItem(this.JWT_TOKEN, jwt);
    }

    private storeTokens(tokens: Tokens) {
        localStorage.setItem(this.JWT_TOKEN, tokens.token);
        localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
    }

    private removeTokens() {
        localStorage.removeItem(this.JWT_TOKEN);
        localStorage.removeItem(this.REFRESH_TOKEN);
    }
}
