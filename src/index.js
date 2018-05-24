import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom"
import { firebaseApp } from "./Firebase";
import createHistory from 'history/createBrowserHistory'
import { Provider } from "react-redux"
import { createStore } from "redux";
import { logUser } from "./ducks/actions";
import reducer from "./ducks/reducers";

import App from './components/App';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
let history = createHistory()

firebaseApp.auth().onAuthStateChanged(user => {

    if (user) {
        console.log("user has signed in or up", user)
        const {email} = user
        store.dispatch(logUser(email))
        history.push("/app")
    } else {
        console.log("User has signed out or still eneds to sign in.")
        history.push("/signin")
    }
})

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router exact path="/" history={history}>
                <div>
                    <Route path="/app" component={App} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </div>
            </Router>
        </div>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
