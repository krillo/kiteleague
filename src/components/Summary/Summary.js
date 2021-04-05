import React, {Component} from 'react';
import './Summary.scss';
import {getCurrentTimestamp, getSetting} from "../../utils/utils";
import  spotsFile  from "../../spotsFile";
import {
    clearNCacheAllSpots,
    getWindDataForSpot,
    getWindDataForAllSpots,
    dataNeedsUpdate,
    primeWeatherData,
    getSpotDataFromSessionStorage,
} from "../../utils/weatherData";
import SpotHead from "../SpotHead/SpotHead";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import Spinner from "../Spinner/Spinner";

class Summary extends Component {
    constructor(props) {
        super(props);
        console.log('*** constructor of Summary');
        let dataReady = !dataNeedsUpdate();
        this.state =  {
            spotData: null,
            dataReady: dataReady,
            spotsSummary: (<div>Loading..</div>),
            showKitesurf: getSetting('showKitesurf', true),
            showSnowkite: getSetting('showSnowkite', true),
            showSpecial: getSetting('showSpecial', true),
        }
    }

    componentDidMount() {
        if (!this.state.dataReady) {
            primeWeatherData().then(value => {
                const spotsSummary = this.spotsSummary()
                this.state.dataReady = value;
                this.setState({'spotsSummary':this.spotsSummary()});
            })
        } else {
             this.setState({'spotsSummary':this.spotsSummary()});
        }
    }

    getSpotHead = (current) => {
        const timestamp = getCurrentTimestamp();
        const wind = current.hourly[timestamp].wind;
        const gust = current.hourly[timestamp].gust;
        const dir = current.hourly[timestamp].dir;
        const icon = current.hourly[timestamp].icon;
        const temp = current.hourly[timestamp].temp;
        const dirMin = current.dirMin;
        const dirMax = current.dirMax;
        return <SpotHead
            key={`summary-head-${this.state.spotId}`}
            id={current.id}
            name={current.name} wind={wind}
            gust={gust} dir={dir}
            temp={temp} icon={icon}
            timestamp={timestamp}
            dirMin={dirMin} dirMax={dirMax}
        />
    }

    showTypes(){
       let cssClass = this.state.showKitesurf ? ' kitesurf ' : '';
       cssClass += this.state.showSnowkite ? ' snowkite ' : '';
       cssClass += this.state.showSpecial ? ' special ' : '';
       return cssClass;
    }

    spotsSummary = () => {
        let current, cssClass;
        if( this.state.dataReady ) {
            const spotsSummary = spotsFile.map((spot) => {
                current = getSpotDataFromSessionStorage(spot);
                if (current !== null) {
                    cssClass = current.type.join(" ");
                    return (
                        <div key={`spot-${current.id}`} className={`summary-spot spot-${current.id} ${cssClass}`}>
                            { this.getSpotHead(current) }
                        </div>
                    );
                } else {
                    return ''
                }

            })
            return spotsSummary;
        }
    }

    render() {
        let showTypes = this.showTypes();
        return (
            <div className={`summary-page ${showTypes}`}>
                {this.state.dataReady === false ? (
                    <div>
                        <Spinner />
                    </div>
                ) : (
                    <div>
                        { this.state.spotsSummary }
                    </div>
                    )
                }
            </div>
        )
    }

}
export default Summary;
