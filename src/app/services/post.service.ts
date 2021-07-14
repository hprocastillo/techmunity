import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../interfaces/post';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	posts: Observable<Post[]> | undefined;

	private postsCollection: AngularFirestoreCollection<Post>;


	constructor(private readonly afs: AngularFirestore) {
		this.postsCollection = afs.collection<Post>('posts', ref => ref.orderBy('createdAt', 'desc'));
		this.getPosts();
	}

	savePost(post: Post, postId: string): Promise<void> {
		return new Promise(async (resolve, reject) => {
			try {
				const id = postId || this.afs.createId();
				const data = {id, ...post};
				const result = await this.postsCollection.doc(id).set(data);
				resolve(result);
			} catch (err) {
				reject(err.message);
			}
		});
	}




	deletePost(postId: string): Promise<void> {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await this.postsCollection.doc(postId).delete();
				resolve(result);
			} catch (err) {
				reject(err.message);
			}
		});
	}

	getPosts(): void {
		this.posts = this.postsCollection.snapshotChanges().pipe(
				map(actions => actions.map(a => a.payload.doc.data() as Post))
		);
	}


}
