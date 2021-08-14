import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from './App';
import Register from './Register'
import VerifyCode from './VerifyCode'

import { Header } from './Header'

export default function Navigator() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/verify-code" exact>
                        <VerifyCode />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/" exact>
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
