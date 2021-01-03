import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SpotHead from './components/SpotHead/SpotHead';
import Detail from './components/Detail/Detail';
import Summary from './components/Summary/Summary';
import Nav from './components/Nav/Nav';

import Beep from './components/Beep/Beep';
import RestAxios from './components/RestAxios/RestAxios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {getWindData} from "./utils/weatherData";



let spotsSummary = [
    {id: "1", name: 'Råå', wind: 6, gust: 8, dir: 90, temp: 14, icon: 'partlycloudy_night', timestamp:'2020-12-16T21:00:00Z'},
    {id: "2", name: 'Fortuna', wind: 7.9, gust: 9, dir: 180, temp: 13, icon: 'cloudy', timestamp:'2020-12-16T21:00:00Z'},
    {id: "3", name: 'LA', wind: 19, gust: 10, dir: 270, temp: 12, icon: 'fair_day', timestamp:'2020-12-16T21:00:00Z'},
    {id: "4", name: 'JP', wind: 11, gust: 12, dir: 90, temp: 12, icon: 'clearsky_day', timestamp:'2020-12-16T21:00:00Z'},
    {id: "5", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
    {id: "6", name: 'Habo', wind: 8, gust: 15, dir: 180, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
    {id: "7", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
    {id: "8", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
    {id: "9", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
    {id: "10", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', timestamp:'2020-12-16T21:00:00Z'},
];
const spotItems = spotsSummary.map((spot) =>
    <SpotHead
        key={`head${spot.id}`} id={spot.id} name={spot.name} wind={spot.wind}
        gust={spot.gust} dir={spot.dir} temp={spot.temp} icon={spot.icon}
        timestamp={spot.timestamp}
    />
);





const windData = () => {
    const windData = getWindData(1);
    console.log(windData);
    return '';
}



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="container">
                <div className={'main'}>
                    <Nav />
                    <Switch>
                        <Route exact path="/">
                                {spotItems}
                        </Route>
                        <Route path="/detail">
                            <Detail spotId={"1"} />
                        </Route>
                        <Route path="/summary">
                            <Summary  />
                        </Route>
                        <Route path="/beep">
                            <Beep  />
                        </Route>
                        <Route path="/RestAxios">
                            <RestAxios  />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

