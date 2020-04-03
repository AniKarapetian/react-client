import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import {
	reactReduxFirebase,
	firebaseReducer,
	getFirebase
} from "react-redux-firebase";
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

// Init firebase instance
let app = firebase.initializeApp(firebaseConfig);

// react-redux-firebase config
const rrfConfig = {
	userProfile: "users"
};

// Init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
	reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
	reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer
});

// Create initial state
const initialState = {};

//Create store
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(firebase)
	)
);

const firestore = firebase.firestore(app);

//   firestore.collection("clients").add({
//     firstName: "John",
//     lastName: "Doe",
//     balance: 0,
//     id:2
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// firestore.collection("clients").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//   });
// });

export default store;
