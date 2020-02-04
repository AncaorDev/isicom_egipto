import { Component, OnInit } from '@angular/core';
import { TypeFooter } from 'src/app/shared/global.model';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.pug',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	type_footer = TypeFooter;
	_link_terms = '';
	_link_fb 	= '';
	_link_wp 	= '';
	_link_in 	= '';

	constructor(public _global_srv:GlobalService) {

	}

	ngOnInit() {
	}

}
