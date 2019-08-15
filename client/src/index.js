import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'gestalt/dist/gestalt.css'

import App from './components/App';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Checkout from './components/Checkout'

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <Router>
        <Switch>
            <Route component={App} to="/" />
            <Route component={Signin} to="/signin" />
            <Route component={Signup} to="/signup" />
            <Route component={Checkout} to="/checkout" />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
