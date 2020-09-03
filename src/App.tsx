import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    height : 100vh;
    display : flex;
    flex-direction: column;
`

const Main = styled.div`
    flex-grow : 1;
    overflow : auto;
`
const Nav = styled.nav`
    border: 1px solid green;
    >ul{
            display : flex;
     > li{
        width : 33.33333%;
        text-align : center;
        padding: 16px;
     }
    }
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/tags">标签</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}

function Tags() {
    return <h2>Tags</h2>;
}

function Money() {
    return <h2>Money</h2>;
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function Nofound() {
    return (
        <div>页面不存在，请检查</div>
    )
}

export default App;
