import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Direction from '../Direction/Direction';
import './Spot.scss';

class Spot extends React.Component {
    constructor(props) {
        super(props);
    }

    getDate(jsondate, type) {
        let date = new Date(jsondate);
        let months = ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        let monthName = months[date.getMonth()];
        let day = date.getDate();
        let niceDate = day + ' ' + monthName;
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let time = hour + ':' + minutes;
        switch (type) {
            case 'date':
                return niceDate;
                break;
            case 'time':
                return time;
                break;
            default:
                return niceDate;
        }
    }


    render() {
        return (
            <Link to="/beep" id={this.props.id} props={this.props}>
                <div className='spot' >
                    <div className="spot-head">
                        <div className="left">
                            <div className="symbol">
                                {this.props.wind.toFixed(0)}
                            </div>
                            <div className={'name'}>
                                {this.props.name}
                            </div>
                        </div>
                        <div className="right">{this.getDate(this.props.time, 'date')}</div>
                    </div>
                    <div className="spot-data">
                        <div className="dir"> <Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} /></div>
                        <div className='wind-area'>
                            <div className="wind">{this.props.wind}</div>
                            <div className="gust">({this.props.gust})</div>
                        </div>
                        <div className="icon">{this.props.icon}</div>
                        <div className="temp">{this.props.temp}°</div>
                    </div>
                </div>
            </Link>
        );
    }
}
export default Spot;

//
// {id: "4", name: 'BBC', wind: 8.2, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//
//         key={spot.id} id={spot.id} name={spot.name} wind={spot.wind}
//         gust={spot.gust} dir={spot.dir} temp={spot.temp} icon={spot.icon}
//         time={spot.time}