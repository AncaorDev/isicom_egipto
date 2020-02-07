import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter } from 'rxjs/internal/operators/filter';
import { ScheduleService } from './schedule.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.pug',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

	loadData:BehaviorSubject<any> 	= new BehaviorSubject<any>(null);
	load:boolean = false;
	constructor(private activatedRoute:ActivatedRoute,
				private scheduleSrv: ScheduleService,
				private authSrv : AuthService,
				private router: Router) {
		this.activatedRoute.params
		.subscribe(a => a && this.loadData.next(a));
	}

	ngOnInit() {
		this.loadData.pipe(filter(a => a != null))
		.subscribe(a => {
			this.loadToken(a);
		});
	}

	async loadToken(a?:any) {
		try {
			let data = await this.authSrv.login(a.id).toPromise();
			this.loadSchedule();
		} catch (err) {
			localStorage.setItem('err', err.status)
			this.router.navigate(['/unauthorizaded'])
		}
	}

	async loadSchedule() {
		try {
			let data = await this.scheduleSrv.orders().toPromise();
			this.load = true;
		} catch (err) {

		}
	}

	ngOnDestroy() {
	}
}
