import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";
import {Post} from "../../interfaces/post";
import {User} from "../../interfaces/user";
import {Comment} from "../../interfaces/comment";
import {Like} from "../../interfaces/like";
import {LikeService} from "../../services/like.service";


@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	@Input() post = {} as Post;
	@Input() user = {} as User;
	commentActive = false;
	listCommentsActive = false;
	commentForm: FormGroup;
	comments = [] as Comment[];
	numberComments = 0;
	likeForm: FormGroup;
	likes = [] as Like[];
	numberLikes = 0;
	date = new Date();

	constructor(private router: Router, private fb: FormBuilder, private postSvc: PostService, private commentSvc: CommentService, private likeSvc: LikeService) {
		this.commentForm = this.fb.group({
			userId: [''],
			userDisplayName: [''],
			userPhotoURL: [''],
			content: ['', [Validators.required]]
		});
		this.likeForm = this.fb.group({
			userId: [''],
			userDisplayName: [''],
			userPhotoURL: ['']
		});
	}

	ngOnInit() {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		document.body.appendChild(tag);

		if (this.post.id != null) {
			this.commentSvc.getCommentsByPost(this.post.id).subscribe(
					res => {
						this.comments = res;
						this.numberComments = res.length;
					});
			this.likeSvc.getLikesByPost(this.post.id).subscribe(
					res => {
						this.likes = res;
						this.numberLikes = res.length;
					});
		}
	}

	showCommentsForm() {
		this.commentActive = true;
	}

	showListComments() {
		this.listCommentsActive = true;
	}

	showListLikes() {
	}

	onComment(postId: any, userId: any, userDisplayName: any, userPhotoURL: any): void {
		if (this.commentForm.valid) {
			const comment = this.commentForm.value;
			comment.postId = postId;
			comment.userId = userId;
			comment.userDisplayName = userDisplayName;
			comment.userPhotoURL = userPhotoURL;
			comment.createdAt = this.date;
			this.commentSvc.saveComment(comment);
			this.commentForm.reset();
			console.log('Guardado', comment);
		}
	}

	onLike(postId: any, userId: any, userDisplayName: any, userPhotoURL: any): void {
		this.likeSvc.getLikesByUser(postId, userId).subscribe(
				res => {
					if (res.length === 0) {
						if (this.likeForm.valid) {
							const like = this.likeForm.value;
							like.postId = postId;
							like.userId = userId;
							like.userDisplayName = userDisplayName;
							like.userPhotoURL = userPhotoURL;
							like.createdAt = this.date;
							this.likeSvc.saveLike(like);
							this.likeForm.reset();
							console.log('Guardado', like);
						}
					}
				});
	}

}
