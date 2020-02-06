import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { filter } from 'rxjs/internal/operators/filter';
import { ScheduleService } from './schedule.service';

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
				private router: Router) {
		this.activatedRoute.params
		.subscribe(a => a && this.loadData.next(a));
	}

	ngOnInit() {
		this.loadData.pipe(filter(a => a != null))
		.subscribe(a => {
			// console.log("TCL: ScheduleComponent -> ngOnInit -> a", a)
			this.loadToken(a);
		});
	}

	async loadToken(a?:any) {
		try {
			let data = await this.scheduleSrv.validateKeyGenToken(a.id).toPromise();
			this.load = true;
            // console.log("TCL: ScheduleComponent -> loadToken -> data", data);
		} catch (err) {
			localStorage.setItem('err', err.status)
			this.router.navigate(['/unauthorizaded'])
		}
	}
}
