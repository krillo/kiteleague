import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Detail from './components/Detail/Detail';
import Direction from './components/Direction/Direction';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import NavFooter from './components/NavFooter/NavFooter';
import { getIcon } from './utils/utils.js';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    getSiteHeading = () => {
        return <Link to="/" className={'home'}><h1 className={'site-heading'}>Kite league {getIcon('kitesurfing', 'png', 'kitesurfing')}</h1></Link>
    }

    getTagLine = () => {
        return <div className={'tagline'}> Find the best wind of your favorite kite spots </div>
    }

    getSignature = () => {
        return (
            <div className={'signature'}>
                Kite league is a home grown website from the west coast of Skåne by KaptenKrillo
            </div>
        );
    }

    getLedger = () => {
        const ledger = [
            {'text':'0-3', value: 1},
            {'text':'4-6', value: 4},
            {'text':'7-9', value: 7},
            {'text':'10-12', value: 10},
            {'text':'13-15', value: 13},
            {'text':'16-18', value: 16},
            {'text':'19-', value: 19},
        ]
        let inner =  ledger.map((wind) => {
            return (
                    <div key={`wind-span + ${wind.value}`} className={'wind-span'}>
                        <div className={'dir'}><Direction dir={'220'} wind={wind.value} gust={wind.value} dirMin={0} dirMax={360}/></div>
                        <div className={'text'}>{wind.text} m/s</div>
                    </div>
            )
        });
        return (
            <div className={'ledger-container'}>
                <h2>Ledger</h2>
                <div className={'ledger'}> {inner} </div>
                <div className={'wrong-direction'}>
                    <div className={'wrong-ledger'}>
                        <div className={'dir'}><Direction dir={'220'} wind={1} gust={2} dirMin={0} dirMax={180}/></div>
                        <div className={'text'}>Wrong wind direction</div>
                    </div>
                </div>
            </div>
        );
    }



    render() {
        return (
        <React.StrictMode>
            <Router>
                <div className="container">
                    <div className={'main'}>
                        {this.getSiteHeading()}
                        <Switch>
                            <Route exact path="/">
                                <div className={'main-index'}>
                                    {this.getTagLine()}
                                    {this.getLedger()}
                                </div>
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