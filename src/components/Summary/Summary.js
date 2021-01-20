import React, {Component} from 'react';
import './Summary.scss';
import { getCurrentTimestamp} from "../../utils/utils";
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

class Summary extends Component {
    constructor(props) {
        super(props);
        console.log('*** constructor of Summary');
        let dataReady = !dataNeedsUpdate();
        this.state =  {
            spotData: null,
            dataReady: dataReady,
            spotsSummary: (<div>Tjoho</div>),
        }
        // if(!dataReady){
        //     primeWeatherData().then(value => {
        //         this.state.dataReady = value;
        //         this.state.spotsSummary = this.spotsSummary()
        //     })
        // } else {
        //     this.state.spotsSummary = this.spotsSummary()
        // }

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
        //
        // if (!this.state.dataReady) {
        //     this.setState({'spotsSummary':this.spotsSummary()});
        // }
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

    spotsSummary = () => {
        let current;
        if( this.state.dataReady ) {
            const spotsSummary = spotsFile.map((spot) => {
                current = getSpotDataFromSessionStorage(spot);
                return (
                    <div key={`summary-${current.id}`} className={`summary-${current.id}`}>
                        { this.getSpotHead(current) }
                    </div>
                );
            })
            return spotsSummary;
        }
    }

    render() {
        return (
            <div className={"summary-page"}>
                {this.state.dataReady === false ? (
                    <div>
                        <div>Loading...</div>
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
