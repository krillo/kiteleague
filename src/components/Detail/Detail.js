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

        return (
            <div className="Detail">

                {this.state.windData.name}


                <ul>
                    { this.state.windData.hourly.map(hour =>
                        <li key={this.state.windData.id + '-' + hour.time}>
                            <div>{getDate(hour.time, 'time')}</div>
                            <div className="dir"> <Direction dir={hour.dir} wind={hour.wind} gust={hour.gust} /></div>
                            <div className='wind-area'>
                                <div className="wind">{hour.wind}</div>
                                <div className="gust">({hour.gust})</div>
                            </div>
                            {getWeatherIconByKey(hour.icon)}
                            <div className="temp">{hour.temp}°</div>
                        </li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Detail;
