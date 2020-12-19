import React from 'react';
import { Link } from "react-router-dom";
import { getDate } from './../../utils/utils.js';
import Direction from '../Direction/Direction';
import './Spot.scss';

class Spot extends React.Component {
    constructor(props) {
        super(props);
    }

    getImage(imgKey) {
        let src = '/img/weathericon/svg/' + imgKey + '.svg';
        return <img className='icon' src={src}/>;
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
                        <div className="right">{getDate(this.props.time, 'date')}</div>
                    </div>
                    <div className="spot-data">
                        <div className="dir"> <Direction dir={this.props.dir} wind={this.props.wind} gust={this.props.gust} /></div>
                        <div className='wind-area'>
                            <div className="wind">{this.props.wind}</div>
                            <div className="gust">({this.props.gust})</div>
                        </div>
                        {this.getImage(this.props.icon)}
                        <div className="temp">{this.props.temp}°</div>
                    </div>
                </div>
            </Link>
        );
    }
}
export default Spot;
