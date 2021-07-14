import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	userNameDefault = 'Usuario';
	public user$: Observable<any> = this.authSvc.afAuth.user;

	constructor(private authSvc: AuthService) {
	}

	ngOnInit(): void {
	}

}
