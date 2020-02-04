import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { GlobalService } from '../shared/global.service';

@Injectable({
  	providedIn: 'root'
})
// HttpInterceptor para servicios, implementamos HttpInterceptory
export class AuthInterceptorService implements HttpInterceptor {

	constructor(public _global:GlobalService) { }

	// implementamos el metodo definido en la interfaz de HttpInterceptor * intercept *
	intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {

		let token = localStorage.getItem('token');
		let request = req;
		if(token) {
			request = req.clone({
				setHeaders : {
					'Authorization' : 'Bearer ' + token,
					'Content-Type'  : 'application/json; charset=utf-8'
				}
			})
		}

		return next.handle(request).pipe(
			catchError((err: HttpErrorResponse) => {
				// Al tener el error podemos detectar si el token ha vencido
				// if (err.status === 401) {
				//   this.router.navigateByUrl('admin/login');
				// }
				return throwError(err);
			})
		);
	}
}


