import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { GlobalService } from './shared/global.service';

@Injectable({
	providedIn: 'root'
})

export class AppService {
	constructor(private http:HttpClient,
				private global:GlobalService) { }

	validateKeyGenToken(): Observable<any>{
		return this.http.get(`${environment.url_back}/`)
	}
}
