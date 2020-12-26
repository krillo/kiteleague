import React from 'react';
import { Link } from "react-router-dom";
import { getDate, getWeatherIconByKey} from './../../utils/utils.js';
import Direction from '../Direction/Direction';
import './Spot.scss';

class Spot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let weatherIcon = getWeatherIconByKey(this.props.icon);
        let spotid = "?spotid=" + this.props.spotId;
        let windRound = this.props.wind.toFixed(0);

        return (
            <Link to={{
                      pathname: "/detail",
                      search: spotid,
                  }}
                  props={this.props}>
                <div className='spot' >
                    <div className="spot-head">
                        <div className="left">
                            <div className={`symbol w${windRound}`} >
                                {windRound}
                            </div>
                            <div className={'name'}>
                                {this.props.name}
                            </div>
                        </div>
                        <div className="right">
                            <div className={'weekday'}>{getDate(this.props.time, 'weekday')}</div>
                            <div className={'nice-date'}>{getDate(this.props.time, 'date')}</div>
                        </div>
                    </div>
                    <div className="spot-data">
                        <div className="dir"> <Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} /></div>
                        <div className='wind-area'>
                            <div className="wind">{this.props.wind}</div>
                            <div className="gust">({this.props.gust})</div>
                        </div>
                        {weatherIcon}
                        <div className="temp">{this.props.temp}°</div>
                    </div>
                </div>
            </Link>
        );
    }
}
export default Spot;
