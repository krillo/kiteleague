import React from 'react';
import { Link } from "react-router-dom";
import { getDate, getWeatherIconByKey} from './../../utils/utils.js';
import { getPath } from './../../settingsFile';
import Direction from '../Direction/Direction';
import './SpotHead.scss';

class SpotHead extends React.Component {
    constructor(props) {
        super(props);
        console.log('Spot1');
        console.log(props);
    }

    render() {
        let weatherIcon = getWeatherIconByKey(this.props.icon);
        let spotid = "?spotid=" + this.props.id;
        let windRound = this.props.wind.toFixed(0);

        return (
            <Link to={{
                      pathname: getPath.detail,
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
                            <div className={'weekday'}>{getDate(this.props.timestamp, 'weekday-short')}</div>
                            <div className={'nice-date'}>{getDate(this.props.timestamp, 'date')}</div>
                            <div className={'nice-date'}>{getDate(this.props.timestamp, 'time')}</div>
                        </div>
                    </div>
                    <div className="spot-data">
                        <div className="dir"> <Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} dirMin={this.props.dirMin} dirMax={this.props.dirMax}/></div>
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
export default SpotHead;
