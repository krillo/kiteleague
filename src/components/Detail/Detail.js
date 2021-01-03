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
        return <SpotHead
            key={`detail-head-${this.state.spotId}`}
            id={current.id}
            name={current.name} wind={wind}
            gust={gust} dir={dir}
            temp={temp} icon={icon}
            timestamp={timestamp}
        />
    }

    getHourly = (current) => {
        let elementKey, newDay, hour;
        let x = [];
            Object.keys(current.hourly).forEach( key => {
            hour = current.hourly[key];
            elementKey = getDate(hour.timestamp, 'key')+ '-' +current.id;
            newDay = '';

            if(hour.hour === '00') {
                newDay = (
                    <div className={'day'}>
                        <div className={'weekday'}>{getDate(hour.timestamp, 'weekday')}</div>
                        <div className={'nice-date'}>{getDate(hour.timestamp, 'date')}</div>
                    </div>);
            }
            x.push (
                <div key={elementKey} className={elementKey}>
                    {newDay}
                    <div className={`hourly ${elementKey}`}>
                        <div className="hour">{getDate(hour.timestamp, 'hour')}</div>
                        <div className="dir"> <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} /></div>
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


// <Spot
// key={`detail-head-${this.state.spotId}`}
// spotId={this.state.spotId}
// name={this.state.current.name} wind={this.state.current.hourly[0].wind}
// gust={this.state.current.hourly[0].gust} dir={this.state.current.hourly[0].dir}
// temp={this.state.current.hourly[0].temp} icon={this.state.current.hourly[0].icon}
// time={this.state.current.hourly[0].time}
// />



//
// {this.state.windData.length === 0 ? (
// <div>Loading...</div>
// ) : (
// <div>kalle anka</div>
// { this.getSpotHead(current) }
// )}


    // render() {
    //     console.log(this.state.windData);
    //     let current = this.state.windData;
    //     let key, newDay;
    //     return (
    //         <div className={"detail-page"}>
    //             {this.state.windData.length === 0 ? (
    //                 <div>Loading...</div>
    //             ) : (
    //
    //
    //
    //             {this.state.windData.hourly.map( hour => {
    //                 key = getDate(hour.time, 'key')+ '-' +this.state.windData.id;
    //                 newDay = '';
    //                 if(hour.hour === '00') {
    //                     newDay = (
    //                         <div className={'day'}>
    //                             <div className={'weekday'}>{getDate(hour.time, 'weekday')}</div>
    //                             <div className={'nice-date'}>{getDate(hour.time, 'date')}</div>
    //                         </div>);
    //                 }
    //                 return (
    //                     <div key={key} className={key}>
    //                         {newDay}
    //                         <div className={`hourly ${key}`}>
    //                             <div className="hour">{getDate(hour.time, 'hour')}</div>
    //                             <div className="dir"> <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} /></div>
    //                             <div className='wind-area'>
    //                                 <div className="wind">{hour.wind} <span>m/s</span></div>
    //                                 <div className="gust">({hour.gust})</div>
    //                             </div>
    //                             {getWeatherIconByKey(hour.icon)}
    //                             <div className="temp">{hour.temp}°</div>
    //                         </div>
    //                     </div>
    //                 )
    //             })}
    //             )}
    //
    //
    //
    //         </div>
    //     );
    // }


}

export default Detail;
