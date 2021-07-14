import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Like {
	id?: string;
	postId: string;
	userId: string;
	userDisplayName: string;
	userPhotoURL: string;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}
