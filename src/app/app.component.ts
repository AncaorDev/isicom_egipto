import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title:string = 'pacasmayo-isicom';

	constructor(private activatedRoute:ActivatedRoute) {

	}

	ngOnInit() {

	}

	ngOnDestroy() {

	}
}
