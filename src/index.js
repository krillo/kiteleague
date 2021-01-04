import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Detail from './components/Detail/Detail';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="container">
                <div className={'main'}>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                            index.html
                        </Route>
                        <Route path="/detail">
                            <Detail spotId={"1"} />
                        </Route>
                        <Route path="/summary">
                            <Summary  />
                        </Route>
                        <Route path="/settings">
                            <Settings  />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

