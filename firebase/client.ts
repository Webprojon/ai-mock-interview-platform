import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBnHvaWNhrppT-eovkcJTL351fHo49Rtcs",
	authDomain: "prepwise-a61ce.firebaseapp.com",
	projectId: "prepwise-a61ce",
	storageBucket: "prepwise-a61ce.firebasestorage.app",
	messagingSenderId: "978112928246",
	appId: "1:978112928246:web:d47eca9432b4955d37cfd7",
	measurementId: "G-5EFY8JW20C",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
