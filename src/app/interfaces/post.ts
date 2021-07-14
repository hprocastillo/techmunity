import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Post {
	id?: string;
	userId: string;
	userDisplayName: string;
	userPhotoURL: string;
	content?: string;
	visibility?: string;
	updated: boolean;
	createdAt: Timestamp;
	updatedAt: Timestamp;
}