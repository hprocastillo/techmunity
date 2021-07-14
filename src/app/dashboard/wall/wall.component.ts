import {Component, Input, OnInit} from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {User} from "../../interfaces/user";

@Component({
	selector: 'app-wall',
	templateUrl: './wall.component.html',
	styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

	post$ = this.postSvc.posts;
	@Input() user = {} as User;

	constructor(private postSvc: PostService) {
	}

	ngOnInit(): void {
	}

}
