import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(
    private authSvc: AuthService,
    private router: Router) {
  }

  async ngOnInit() {
    const user = await this.authSvc.getCurrentUser();
  }

  async logout() {
    try {
      await this.authSvc.logout();
      await this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
