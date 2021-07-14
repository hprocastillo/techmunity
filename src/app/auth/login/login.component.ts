import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

	constructor(private authSvc: AuthService, private router: Router) {
	}

	ngOnInit(): void {
	}

	async onLogin() {
		const {email, password} = this.loginForm.value;

		try {
			const user = await this.authSvc.login(email, password);
			if (user) {
				await this.router.navigate(['/dashboard']);
			}
		} catch (error) {
			console.log(error);
		}
	}

	async onGoogleLogin() {
		try {
			const user = await this.authSvc.loginGoogle();
			if (user) {
				await this.router.navigate(['/dashboard']);
			}
		} catch (error) {
			console.log(error);
		}
	}
}
