import React from 'react';
import { Link } from "react-router-dom";
import { getDate, getWeatherIconByKey} from './../../utils/utils.js';
import { getPath } from './../../settingsFile';
import Direction from '../Direction/Direction';
import SpotDirection from '../SpotDirection/SpotDirection';
import './SpotHead.scss';

class SpotHead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let weatherIcon = getWeatherIconByKey(this.props.icon);
        let windRound = this.props.wind.toFixed(0);
        const path = getPath.detail + '/' + this.props.id;
        return (
            <Link to={{ pathname: path }}
                  props={this.props}>
                <div className='spot' >
                    <div className="spot-head">
                        <div className="left">
                            {/*<SpotDirection dirMin={this.props.dirMin} dirMax={this.props.dirMax} wind={windRound}/>*/}
                            {/*<div className={`symbol w${windRound}`} >*/}
                            {/*    {windRound}*/}
                            {/*</div>*/}
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
                        {weatherIcon}
                        <div className="temp">{this.props.temp}°</div>
                        <SpotDirection dirMin={this.props.dirMin} dirMax={this.props.dirMax} wind={windRound} mode={'dark'}/>
                        <div className="dir"> <Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} dirMin={this.props.dirMin} dirMax={this.props.dirMax}/></div>
                        <div className="wind">{this.props.wind}</div>
                        <div className="gust">({this.props.gust})</div>
                    </div>
                </div>
            </Link>
        );
    }
}
export default SpotHead;


// <div className='wind-area'>
//     <div className="wind">{this.props.wind}</div>
//     <div className="gust">({this.props.gust})</div>
// </div>