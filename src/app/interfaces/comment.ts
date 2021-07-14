import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Comment {
	id?: string;
	postId: string;
	userId: string;
	userDisplayName: string;
	userPhotoURL: string;
	content: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}
