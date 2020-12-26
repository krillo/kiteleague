import React, {Component} from 'react';
import './Detail.scss';
import { getWindData, getSpotIdFromUrl, getDate, getWeatherIconByKey } from "../../utils/utils";
import Direction from '../Direction/Direction';
import Spot from "../Spot/Spot";


export class Detail extends Component {
    constructor(props) {
        super(props);

        let spotId = getSpotIdFromUrl();
        this.state = {
            spotId: spotId,
            windData: getWindData(spotId),
        }
    }




    render() {
        console.log(this.state.windData);
        let current = this.state.windData;
        return (
            <div className={"detail-page"}>
                <Spot
                    key={`detail-head-${this.state.spotId}`}
                    spotId={this.state.spotId}
                    name={current.name} wind={current.hourly[0].wind}
                    gust={current.hourly[0].gust} dir={current.hourly[0].dir}
                    temp={current.hourly[0].temp} icon={current.hourly[0].icon}
                    time={current.hourly[0].time}
                />
                    { this.state.windData.hourly.map(hour => {


                        const key = getDate(hour.time, 'key')+ '-' +this.state.windData.id;
                        let newDay = '';
                        if(hour.hour === '00') {
                            newDay = (
                                <div className={'day'}>
                                    <div className={'weekday'}>{getDate(hour.time, 'weekday')}</div>
                                    <div className={'nice-date'}>{getDate(hour.time, 'date')}</div>
                                </div>);
                        }
                        return (
                            <div key={key} className={key}>
                                {newDay}
                                <div className={`hourly ${key}`}>
                                    <div className="hour">{getDate(hour.time, 'hour')}</div>
                                    <div className="dir"> <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} /></div>
                                    <div className='wind-area'>
                                        <div className="wind">{hour.wind} <span>m/s</span></div>
                                        <div className="gust">({hour.gust})</div>
                                    </div>
                                    {getWeatherIconByKey(hour.icon)}
                                    <div className="temp">{hour.temp}°</div>
                                </div>
                            </div>
                        )}
                    )}


            </div>
        );
    }
}

export default Detail;
