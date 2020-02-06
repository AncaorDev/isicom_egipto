
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/shared/global.service';

@Injectable({
  	providedIn: 'root'
})
export class ScheduleService {

	constructor(private http:HttpClient,
		private global:GlobalService) {

	}

	validateKeyGenToken(dynamicKey?:string): Observable<any>{
		return this.http.post(`${environment.url_back}api/${environment.version_back}/seller/login`, {dynamicKey});
	}

	orders(): Observable<any> {
		return this.http.get(`${environment.url_back}api/${environment.version_back}/seller/order`)
	}
}
