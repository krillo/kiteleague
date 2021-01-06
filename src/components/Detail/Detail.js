import React, {Component} from 'react';
import './Detail.scss';
import { getSpotIdFromUrl, getCurrentTimestamp, getWeatherIconByKey, getDate } from "../../utils/utils";
import {clearLocalStorage, getWindData} from "../../utils/weatherData";
import Direction from '../Direction/Direction';
import SpotHead from "../SpotHead/SpotHead";


export class Detail extends Component {
    constructor(props) {
        super(props);
        let spotId = getSpotIdFromUrl();
        console.log('spotId');
        console.log(spotId);
        this.state = {
            spotId: spotId,
            current: {},
            iterateDate: null,
        }
    }

    componentDidMount() {
        const windDataPromise = getWindData(this.state.spotId);
        windDataPromise.then(windData => this.setState({ current: windData }));

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
            key={`detail-head-${this.state.spotId}`}
            id={current.id}
            name={current.name} wind={wind}
            gust={gust} dir={dir}
            temp={temp} icon={icon}
            timestamp={timestamp}
            dirMin={dirMin} dirMax={dirMax}
        />
    }


    /**
     * return true if iteration reaches a new day
     * NOTICE! iterateDate is an object so it is passed by reference
     * @param hour
     * @param iterateDate obj
     * @returns {boolean}
     */
    isNewDay(hour, iterateDate){
        let isNewDay = false;
        let isoJustDate = getDate(hour.timestamp, 'iso-just-date');
        if(iterateDate.currentDate === null) {
            iterateDate.currentDate = isoJustDate;
        }
        if(iterateDate.currentDate < isoJustDate) {
            iterateDate.currentDate = isoJustDate;
            isNewDay = true;
        }
        return isNewDay;
    }

    getHourly = (current) => {
        let elementKey, newDay, hour, isoJustDate;
        let iterateDate = {currentDate: null};
        let daylightClass = '';
        let x = [];
            Object.keys(current.hourly).forEach( key => {
            hour = current.hourly[key];
            elementKey = getDate(hour.timestamp, 'key')+ '-' +current.id;
            daylightClass = (hour.isDaylight === true) ? 'daylight' : '';
            isoJustDate = getDate(hour.timestamp, 'iso-just-date');
            newDay = '';
            if(this.isNewDay(hour, iterateDate)) {
                newDay = (
                    <div className={'day'}>
                        <div className={'weekday'}>{getDate(hour.timestamp, 'weekday')}</div>
                        <div className={'nice-date'}>{getDate(hour.timestamp, 'date')}</div>
                    </div>);
            }
            x.push (
                <div key={elementKey} className={isoJustDate}>
                    {newDay}
                    <div className={`hourly ${elementKey} ${daylightClass}`}>
                        <div className="hour">{getDate(hour.timestamp, 'hour')}</div>
                        <div className="dir"> <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} dirMin={this.state.current.dirMin} dirMax={this.state.current.dirMax} /></div>
                        <div className='wind-area'>
                            <div className="wind">{hour.wind} <span>m/s</span></div>
                            <div className="gust">({hour.gust})</div>
                        </div>
                        {getWeatherIconByKey(hour.icon)}
                        <div className="temp">{hour.temp}°</div>
                    </div>
                </div>
            )
        })
        return x;
    }


    render() {
        console.log('render');
        console.log(this.state.current);
        console.log('render2');
        let current, spotHead, hourly;
        if(this.state.current !== undefined && Object.entries(this.state.current).length !== 0){
            current = this.state.current;
            spotHead = this.getSpotHead(current);
            hourly = this.getHourly(current);
        }

        return (
            <div className={"detail-page"}>
                {this.state.current !== undefined && Object.entries(this.state.current).length === 0 ? (
                    <div>
                        <div>Loading...</div>
                    </div>
                ) : (
                    <div>
                        { spotHead }
                        { hourly }
                    </div>
                )}
            </div>
        )}
}

export default Detail;
