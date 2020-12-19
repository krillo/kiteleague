import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Spot from './components/Spot/Spot';
import Beep from './components/Beep/Beep';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

    // <li>Råå</li>
    // <li>lat 56.001628</li>
    // <li>long 12.737418</li>
    // <li>curl -s 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.9&lon=12.7'|json_pp</li>


let spots = [
    {id: "1", name: 'Råå', wind: 6, gust: 11, dir: 90, temp: 14, icon: 'clearsky_day', time:'2020-12-16T21:00:00Z'},
    {id: "2", name: 'Fortuna', wind: 7.9, gust: 9, dir: 45, temp: 13, icon: 'cloudy', time:'2020-12-16T21:00:00Z'},
    {id: "3", name: 'LA', wind: 9, gust: 10, dir: 0, temp: 12, icon: 'fair_day', time:'2020-12-16T21:00:00Z'},
    {id: "4", name: 'JP', wind: 11, gust: 12, dir: 90, temp: 12, icon: 'clearsky_day', time:'2020-12-16T21:00:00Z'},
    {id: "5", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
    {id: "6", name: 'Habo', wind: 8, gust: 15, dir: 180, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
    {id: "7", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
    {id: "8", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
    {id: "9", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
    {id: "10", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
];
const spotItems = spots.map((spot) =>
    <Spot
        key={spot.id} id={spot.id} name={spot.name} wind={spot.wind}
        gust={spot.gust} dir={spot.dir} temp={spot.temp} icon={spot.icon}
        time={spot.time}
    />
);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="container">
                <div className={'menu'}>
                    <ul>
                        <li>
                            <Link to="/">Spots</Link>
                        </li>
                        <li>
                            <Link to="/beep">Beep</Link>
                        </li>
                    </ul>
                </div>
                <div className={'main'}>
                    <Switch>
                        <Route path="/">
                            <div className="spot-summary">
                                {spotItems}
                            </div>
                        </Route>
                        <Route path="/beep">
                            <Beep />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

