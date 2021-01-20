import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Detail from './components/Detail/Detail';
import Direction from './components/Direction/Direction';
import SpotDirection from './components/SpotDirection/SpotDirection';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import NavFooter from './components/NavFooter/NavFooter';
import {getIcon, getSetting, primeSettings} from './utils/utils.js';
import { primeWeatherData } from './utils/weatherData';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route, Link,
} from "react-router-dom";
import { getPath } from "./settingsFile";
import SpotHead from "./components/SpotHead/SpotHead";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataReady: false,
        }
        console.log('*** constructor of App');
        primeSettings();
        primeWeatherData().then(value => {
            this.state.dataReady = value;
        })
    }

    getSiteHeading = () => {
        return (
        <Link to="/" className={'home'}>
            <h1 className={'site-heading'}>
                Kite league {getIcon('kitesurfing', 'png', 'kitesurfing')}
            </h1>
        </Link>
        );
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
        let goodDir =  ledger.map((wind) => {
            return (
                    <div key={`wind-span + ${wind.value}`} className={'wind-span'}>
                        <div className={'dir'}><Direction dir={'220'} wind={wind.value} gust={wind.value} dirMin={0} dirMax={360}/></div>
                        <div className={'text'}>{wind.text} m/s</div>
                    </div>
            )
        });
        let wrongDir =  ledger.map((wind) => {
            return (
                    <div key={`wind-span + ${wind.value}`} className={'wind-span'}>
                        <div className={'dir'}><Direction dir={'220'} wind={wind.value} gust={wind.value} dirMin={0} dirMax={90}/></div>
                    </div>
            )
        });
        return (
            <div className={'ledger-container'}>
                <h2>Ledger</h2>
                <h3 className={'good-text'}>Arrows show wind direction and speed</h3>
                <div className={'ledger'}> {goodDir} </div>

                <h3 className={'wrong-text'}>Empty arrows means wrong wind direction</h3>
                <div className={'wrong-direction'}>{wrongDir}</div>

                <h3 className={'align-left'}>Show what wind directions are good for that spot</h3>
                <div className={'align-left spot-direction-ledger'} >
                    <SpotDirection dirMin={180} dirMax={290} wind={10} badColor={'#eee'}/>
                </div>
                <h3 className={'align-left'}>Wind gust speed are gray and shown in parenthesis</h3>
                <div className={'align-left text gust-text'}>(14)</div>

            </div>
        );
    }

    render() {
        return (
        <React.StrictMode>
            <Router basename="/kiteleague">
                <div className="container">
                    {this.getSiteHeading()}
                    <div className={'main'}>
                        <Switch>
                            <Route exact path={getPath.home}>
                                <div className={'main-index'}>
                                    {this.getTagLine()}
                                    {this.getLedger()}
                                </div>
                            </Route>
                            <Route path={getPath.detail}>
                                <Detail spotId={"1"} />
                            </Route>
                            <Route exact path={getPath.summary}>
                                <Summary  />
                            </Route>
                            <Route exact path={getPath.settings}>
                                <Settings  />
                                <div className={'debug-spot-direction'}>
                                    <SpotDirection dirMin={270} dirMax={20} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={90} dirMax={45} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={200} dirMax={300} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={0} dirMax={90} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={90} dirMax={270} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={90} dirMax={300} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={0} dirMax={360} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={0} dirMax={0} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={300} dirMax={360} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={10} dirMax={45} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={300} dirMax={200} wind={10}  badColor={'#e5e5e5'}/>
                                    <SpotDirection dirMin={180} dirMax={290} wind={10}  badColor={'#e5e5e5'}/>
                                </div>
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
