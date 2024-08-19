// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB6XnCBW79QbDK2FEyGCwmiexNrlPWYFzo",
	authDomain: "azurechat-91eae.firebaseapp.com",
	projectId: "azurechat-91eae",
	storageBucket: "azurechat-91eae.appspot.com",
	messagingSenderId: "1034329999347",
	appId: "1:472477644017:web:d81641027442bbb10fa550",
	appId: "1:1034329999347:web:f06ec770bd10ebaef37486",
  	measurementId: "G-FR5B8T5DG8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export { db };
