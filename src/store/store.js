import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { createLogger } from 'redux-logger';
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import {
	reduxFirestore,
	firestoreReducer,
	getFirestore,
} from "redux-firestore";
import mainReducer from '../reducers/main-reducer';
import thunk from "redux-thunk";
import firebaseConfig from "./configs";

const loggerMiddleware = createLogger();

firebase.initializeApp(firebaseConfig);
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	mainstore: mainReducer
});
// const initialState = {};

const store = createStore(
	rootReducer,
	// initialState,
	compose(
		applyMiddleware(
			thunk.withExtraArgument({ getFirebase, getFirestore }),
			loggerMiddleware
			),
		reduxFirestore(firebase)
	)
);
export default store;
