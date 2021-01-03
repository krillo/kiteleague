import React, {Component} from 'react';
import './Summary.scss';
import { getCurrentTimestamp} from "../../utils/utils";
import {cacheAllSpots, getCachedWindData } from "../../utils/weatherData";
import Direction from '../Direction/Direction';
import SpotHead from "../SpotHead/SpotHead";
import spots from "../../spots";


class Summary extends Component {
    constructor(props) {
        super(props);
        //const spotIds = cacheAllSpots(true);
        const spotIds = cacheAllSpots(false);

        this.state =  {
            spotIds: spotIds
        }
    }

    componentDidMount() {
        // const windDataPromise = getWindData(this.state.spotId);
        // windDataPromise.then(windData => this.setState({ current: windData }));

    }

    getSpotHead = (current) => {
        const timestamp = getCurrentTimestamp();
        const wind = current.hourly[timestamp].wind;
        const gust = current.hourly[timestamp].gust;
        const dir = current.hourly[timestamp].dir;
        const icon = current.hourly[timestamp].icon;
        const temp = current.hourly[timestamp].temp;
        return <SpotHead
            key={`summary-head-${this.state.spotId}`}
            id={current.id}
            name={current.name} wind={wind}
            gust={gust} dir={dir}
            temp={temp} icon={icon}
            timestamp={timestamp}
        />
    }


    // const spotsSummary = Object.keys(this.state.spotIds).map((key) => {
    // spotId = this.state.spotIds[key];

    spotsSummary = () => {
        console.log(getCurrentTimestamp());
        let current;
        let spotHeads;
        const spotsSummary = this.state.spotIds.map((spotId) => {
            current = getCachedWindData(spotId);
            return (
                <div key={`summary-${current.id}`} className={`summary-${current.id}`}>
                    { this.getSpotHead(current) }
                </div>
            );
        })
        return spotsSummary;
    }




    render() {
        return (
            <div className={"summary-page"}>
                Summary page
                { this.spotsSummary() }
            </div>
        )
    }

}

export default Summary;
