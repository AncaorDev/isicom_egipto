
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/shared/global.service';
import { RspOrderSeller, OrderSeller } from 'src/app/shared/global.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  	providedIn: 'root'
})
export class ScheduleService {

	constructor(private http:HttpClient) { }

	/**
	 *
	 * @param { string } dynamic_key - Llave dinámica obtenida mediante la url
	 */
	orders(): Observable<OrderSeller[]> {
		return this.http.get<RspOrderSeller>(`${environment.url_back}api/${environment.version_back}/seller/orders`)
				.pipe(map(res => res.data));
	}
}
