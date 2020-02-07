import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { GlobalService } from '../shared/global.service';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { filter } from 'rxjs/internal/operators/filter';
import { take } from 'rxjs/internal/operators/take';

@Injectable({
  	providedIn: 'root'
})
// HttpInterceptor para servicios, implementamos HttpInterceptory
export class AuthInterceptorService implements HttpInterceptor {

	constructor(public _global:GlobalService, private authService: AuthService) { }

	// implementamos el metodo definido en la interfaz de HttpInterceptor * intercept *
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (this.authService.getJwtToken()) {
		  	request = this.addToken(request, this.authService.getJwtToken());
		}
		return next.handle(request).pipe(catchError(error => {
			if (error instanceof HttpErrorResponse && error.status === 403) {
				return this.handle403Error(request, next);
			} else {
				return throwError(error);
			}
		}));
	}

	private addToken(request: HttpRequest<any>, token: string) {
		return request.clone({
			setHeaders: {
				'Authorization'	: `Bearer ${token}`,
				'Content-Type'  : 'application/json; charset=utf-8'
			}
		});
	}

	private isRefreshing = false;
	private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
		if (!this.isRefreshing) {
			this.isRefreshing = true;
			this.refreshTokenSubject.next(null);

			return this.authService.refreshToken().pipe(
			switchMap((rsp: any) => {
				this.isRefreshing = false;
				this.refreshTokenSubject.next(rsp.token);
				return next.handle(this.addToken(request, rsp.token));
			}));

		} else {
			return this.refreshTokenSubject.pipe(
			filter(token => token != null),
			take(1),
			switchMap(token => {
				return next.handle(this.addToken(request, token));
			}));
		}
	}
}


