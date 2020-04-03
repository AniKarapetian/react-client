import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
//reactReduxFirebase
import {
	reduxFirestore,
	firestoreReducer,
	getFirestore
} from "redux-firestore";
import thunk from "redux-thunk";

const firebaseConfig = {
	apiKey: "AIzaSyAhRq-c5fKHuR19dxvVpI85WUvxSL24sNk",
	authDomain: "react-client-d326c.firebaseapp.com",
	databaseURL: "https://react-client-d326c.firebaseio.com",
	projectId: "react-client-d326c",
	storageBucket: "react-client-d326c.appspot.com",
	messagingSenderId: "749173193785",
	appId: "1:749173193785:web:f3a34c124e29ff105d61e8"
};

firebase.initializeApp(firebaseConfig);
const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer
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
