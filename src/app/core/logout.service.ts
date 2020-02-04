import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
// import { GlobalService } from '../shared/global.service';
// import { TypeFooter } from '../shared/global.model';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout() {
    localStorage.clear();
    // this._global_srv.footer_type = TypeFooter.login;
    // this.router.navigate(['/_gcp_iap/clear_login_cookie']);
    window.location.replace("/_gcp_iap/clear_login_cookie");
    // this._global_srv.userService.next(null);
  }
}


