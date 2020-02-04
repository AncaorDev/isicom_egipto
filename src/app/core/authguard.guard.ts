import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../shared/global.service';
import { LogoutService } from './logout.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
    constructor(
        private router: Router,
        public global: GlobalService,
        private logoutSrv:LogoutService
    ) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        //Pantallas de logeo
        let isLogin = next.data && next.data.islogin;

        // Validación de sesión
        let session = this.global.session();

        if(isLogin && !session) return true;

        // Si es pantalla de logeo y existe sesión, dedireccionamos a la pantalla de inicio
        if(isLogin && session) {
            this.router.navigate([this.global.homeUrl]);
            return false;
        }

        // Si no es pantalla de logeo y no existe sesión, redireccionamos al login
        if(!isLogin && !session) {
            this.logoutSrv.logout();
            return false;
        }
        // Si no es pantalla de logeo y existe sesión, dejamos pasar
        if(!isLogin && session) return true;
        return true
    }
}
