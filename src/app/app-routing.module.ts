import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizadedComponent } from './core/components/unauthorizaded/unauthorizaded.component';


const routes: Routes = [
	{ path: '', redirectTo : '/auth', pathMatch : 'full' },
	{ path: 'auth', loadChildren: './home/home.module#HomeModule'},
	{ path: 'auth/:id', loadChildren: './home/home.module#HomeModule'},
	{ path: 'unauthorizaded', component : UnauthorizadedComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
