import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nofound from "./views/Nofound";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import {Tag} from "./views/Tag";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/money">
                    <Money/>
                </Route>
                <Route exact path="/tags/:tag">
                    <Tag/>
                </Route>
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/statistics">
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
