import React, {Component} from 'react';
import './Detail.scss';
import {
    getSpotIdFromUrl,
    getCurrentTimestamp,
    getWeatherIconByKey,
    getDate,
    isDaylight,
    getSetting,
    setSetting
} from "../../utils/utils";
import {clearSessionStorage, getWindData} from "../../utils/weatherData";
import Direction from '../Direction/Direction';
import SpotHead from "../SpotHead/SpotHead";
import IOSSwitch from "../IOSSwitch/IOSSwitch";


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
            showOnlyDaylight: getSetting('showOnlyDaylight', true),
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const windDataPromise = getWindData(this.state.spotId);
        windDataPromise.then(windData => this.setState({ current: windData }));

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    });
        if(name === 'showOnlyDaylight') {
            let showOnlyDaylight = getSetting('showOnlyDaylight');
            showOnlyDaylight.value = value;
            setSetting('showOnlyDaylight', showOnlyDaylight);
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

    getWindBar(hour) {
        let fullWidth = 100;
        let wind = hour.wind.toFixed(0);
        let gust = hour.gust.toFixed(0);
        let windWidth = wind * 5;
        let gustWidth = (gust-wind) * 5;
        return (
            <div className={'wind-bar'}>
                <div className={`wind w${wind}`} style={{width:windWidth}}></div>
                <div className={`gust g${gust}`} style={{width:gustWidth}}></div>
            </div>
        );
    }

    noMoreDaylightText = (timestamp) => {
        if(getDate(timestamp, 'is-today')) {
            const now = new Date();
            if(!isDaylight(now.getHours())) {
                return 'active';
            }
        }
        return '';
    }

    getHourly = (current) => {
        let elementKey, newDay, hour, isoJustDate;
        let iterateDate = {currentDate: null};
        let daylightClass = '';
        let showAllClass = '';
        if (this.state.showOnlyDaylight) {
            showAllClass = '';
        } else {
            showAllClass = 'show-all';
        }

        let today = true; //just fist iteration
        let x = [];
            Object.keys(current.hourly).forEach( key => {
            hour = current.hourly[key];
            elementKey = getDate(hour.timestamp, 'key')+ '-' +current.id;
            daylightClass = (hour.isDaylight === true) ? 'daylight' : '';
            isoJustDate = getDate(hour.timestamp, 'iso-just-date');
            newDay = '';
            if(this.isNewDay(hour, iterateDate) || today === true) {
                today = false;
                newDay = (
                    <div className={'new-day'}>
                        <div className={'day'}>
                            <div className={'weekday'}>{getDate(hour.timestamp, 'weekday')}</div>
                            <div className={'nice-date'}>{getDate(hour.timestamp, 'date')}</div>
                        </div>
                        <div className={`no-more-daylight ${this.noMoreDaylightText(hour.timestamp)}`}>
                            No more daylight today...
                        </div>
                    </div>

                );
            }
            x.push (
                <div key={elementKey} className={`${isoJustDate} detail-hour`}>
                    {newDay}
                    <div className={`hourly ${isoJustDate} ${daylightClass} ${showAllClass}`}>
                        <div className={'part part-weather'}>
                            <div className="hour">{getDate(hour.timestamp, 'hour')}</div>
                            {getWeatherIconByKey(hour.icon)}
                            <div className="temp">{hour.temp}°</div>
                        </div>
                        <div className={'part part-wind'}>
                            <div className="dir">
                                <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} dirMin={this.state.current.dirMin} dirMax={this.state.current.dirMax} />
                            </div>
                            <div className="wind">{hour.wind} </div>
                            <div className={`gust g${hour.gust} `} >({hour.gust})</div>
                            <div className="unit">m/s</div>
                        </div>
                        {this.getWindBar(hour)}
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
                        <div className="detail-head">
                            <div className="name">{current.name}</div>
                            <IOSSwitch labelText={'Show only daylight:'} name={"showOnlyDaylight"} checked={this.state.showOnlyDaylight} onChange={this.handleInputChange} />
                        </div>
                        { hourly }
                    </div>
                )}
            </div>
        )}
}

export default Detail;


//<input name="showOnlyDaylight" type="checkbox" checked={this.state.showOnlyDaylight} onChange={this.handleInputChange} />