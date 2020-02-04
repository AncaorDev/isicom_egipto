import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [HeaderComponent, FooterComponent],
	exports: [
		HeaderComponent,
		FooterComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		SharedModule,
		MaterialModule
	]
})
export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only')
		}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule
		};
	}
}
