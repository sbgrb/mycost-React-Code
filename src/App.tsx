import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nofound from "./views/Nofound";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";


function App() {
    return (
        <Router>

            <Switch>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from='/' to='/money'/>
                <Route path='*'>
                    <Nofound/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
