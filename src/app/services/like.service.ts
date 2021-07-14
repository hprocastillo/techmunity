import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Like} from "../interfaces/like";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable({
	providedIn: 'root'
})
export class LikeService {
	likes: Observable<Like[]> | undefined;
	private likesCollection: AngularFirestoreCollection<Like>;

	constructor(private readonly afs: AngularFirestore) {
		this.likesCollection = afs.collection<Like>('likes');
	}

	getLikesByPost(postId: string) {
		return this.afs.collection('likes', ref => ref.where('postId', '==', postId))
		.snapshotChanges().pipe(map(actions => actions.map(a => a.payload.doc.data() as Like)));
	}

	getLikesByUser(postId: string, userId: string) {
		return this.afs.collection('likes', ref => ref.where('postId', '==', postId).where('userId', '==', userId))
		.snapshotChanges().pipe(map(actions => actions.map(a => a.payload.doc.data() as Like)));
	}

	saveLike(like: Like): Promise<void> {
		return new Promise(async (resolve, reject) => {
			try {
				const id = this.afs.createId();
				const data = {id, ...like};
				const result = await this.likesCollection.doc(id).set(data);
				resolve(result);
			} catch (err) {
				reject(err.message);
			}
		});
	}

}
