import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	@Input() user: any;
	@Input() userNameDefault: string | undefined;

	constructor() {
	}

	ngOnInit(): void {
	}

}
