import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import {
	reduxFirestore,
	firestoreReducer,
	getFirestore,
} from "redux-firestore";
import thunk from "redux-thunk";
import firebaseConfig from "./configs";

firebase.initializeApp(firebaseConfig);
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});
const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase)
	)
);
export default store;
