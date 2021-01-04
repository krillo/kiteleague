import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Detail from './components/Detail/Detail';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import NavFooter from './components/NavFooter/NavFooter';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.StrictMode>
            <Router>
                <div className="container">
                    <div className={'main'}>
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
                <NavFooter />
            </Router>
        </React.StrictMode>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));



// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <div className="container">
//                 <div className={'main'}>
//                     <Nav />
//                     <Switch>
//                         <Route exact path="/">
//                             index.html
//                         </Route>
//                         <Route path="/detail">
//                             <Detail spotId={"1"} />
//                         </Route>
//                         <Route path="/summary">
//                             <Summary  />
//                         </Route>
//                         <Route path="/settings">
//                             <Settings  />
//                         </Route>
//                     </Switch>
//                 </div>
//             </div>
//         </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
// );