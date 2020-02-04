import { Injectable } from '@angular/core';
import { TypeFooter } from './global.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {
	private home_url:string  = '/home';
	public user:any;
	public mail_user:string;
	public isAdmin:boolean;
	public footer_type:number = TypeFooter.login;
	public userService:BehaviorSubject<any> = new BehaviorSubject(null);
	public use_token_strapi:boolean = false;
	public user_selected:any;

	// Media query
	public queryListXs: MediaQueryList;
	public queryListMd: MediaQueryList;
	public queryListLg: MediaQueryList;

	constructor() { }

	// Validacion de sesión
	session():boolean {
		let token = localStorage.getItem('token');
		return token ? true : false;
	}

	// Retornamos la url de inicio
	get homeUrl():string {
		return this.home_url;
	}

	set homeUrl(url:string) {
		this.home_url = url;
	}
}
