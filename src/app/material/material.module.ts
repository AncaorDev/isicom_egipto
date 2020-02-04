import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatCheckboxModule,
		MatListModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MatDialogModule
	],
	exports: [
		MatSidenavModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatCheckboxModule,
		MatListModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MatDialogModule
	]
})
export class MaterialModule { }
