import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";
import {Comment} from "../interfaces/comment";

@Injectable({
	providedIn: 'root'
})
export class CommentService {
	comments: Observable<Comment[]> | undefined;
	private commentsCollection: AngularFirestoreCollection<Comment>;

	constructor(private readonly afs: AngularFirestore) {
		this.commentsCollection = afs.collection<Comment>('comments');
	}

	getCommentsByPost(postId: string) {
		return this.afs.collection('comments', ref => ref.where('postId', '==', postId))
		.snapshotChanges().pipe(map(actions => actions.map(a => a.payload.doc.data() as Comment)));
	}

	saveComment(comment: Comment): Promise<void> {
		return new Promise(async (resolve, reject) => {
			try {
				const id = this.afs.createId();
				const data = {id, ...comment};
				const result = await this.commentsCollection.doc(id).set(data);
				resolve(result);
			} catch (err) {
				reject(err.message);
			}
		});
	}


}
