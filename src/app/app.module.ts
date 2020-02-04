import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthguardGuard } from './core/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './core/auth-interceptor.service';
import { AppProvider } from './app.provider';
import { environment } from 'src/environments/environment';

export function AppProviderFactory(provider) {
  return () => provider.load();
}
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		CoreModule.forRoot(),
		BrowserAnimationsModule,
		MaterialModule,
		SharedModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		AppProvider,
		{ 	provide: APP_INITIALIZER,
			useFactory: AppProviderFactory,
			deps: [AppProvider], multi: true
		},
		AuthguardGuard,
		{
			provide  : HTTP_INTERCEPTORS,
			useClass : AuthInterceptorService,
			multi    : true
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
