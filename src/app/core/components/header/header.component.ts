import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../logout.service';
import { GlobalService } from 'src/app/shared/global.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.pug',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	search:FormControl = new FormControl('', [Validators.required]);
	constructor(private logoutSrv:LogoutService,
				private router:Router,
				public _global_srv:GlobalService) { }

	ngOnInit() {
		this.search.setValue("");
	}

	logout() {
		this.logoutSrv.logout();
	}

	buscar() {
		if(this.search.invalid) return;
		//
		// this.gtag.event('buscar_colaborador', {
		// 	method: 'search',
		// 	event_category : 'general',
		// 	event_label : this.search.value
		// });

		this.router.navigate(['/search'], { queryParams: {s:this.search.value} })
		this.search.setValue("");
	}

	goToHome() {
		this.router.navigate(['/home'])
	}
}
