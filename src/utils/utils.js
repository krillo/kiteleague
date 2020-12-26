import axios from 'axios';
import spots from './../spots';

/**
 * Round wind to to 0 decimals
 * @param wind
 * @returns {int}
 */
export const roundWind = (wind) => {
    return wind.toFixed(0);
};

/**
 * jsondate is in this format: 2020-12-16T21:00:00Z
 * date - '16 dec'
 * time - '22:00'
 * hour - '22'
 * key  - '12-16-08'
 * weekday  - 'Wednesday'
 * weekday-short  - 'Wed'
 *
 * @param jsondate
 * @param type
 * @returns {string}
 */
export const getDate = (jsondate, type) => {
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(jsondate);
    let monthName = months[date.getMonth()];
    let day = date.getDate();
    let niceDate = day + ' ' + monthName;
    let hour = pad(date.getHours());
    let minutes = pad(date.getMinutes());
    let time = hour + ':' + minutes;
    let key = jsondate.substring(5, 10)  +  '-' + hour;
    let weekday = weekdays[date.getDay()];
    let weekdayShort = weekdaysShort[date.getDay()];
    switch (type) {
        case 'date':
            return niceDate;
            break;
        case 'time':
            return time;
            break;
        case 'hour':
            return hour;
            break;
        case 'key':
            return key;
            break;
        case 'weekday':
            return weekday;
            break;
        case 'weekday-short':
            return weekdayShort;
            break;
        default:
            return niceDate;
    }
};

/**
 * just for padding hours and minutes with leading 0
 * @param val
 * @returns {string}
 */
function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}




/**
 * return img tag for weather icon key
 * @param imgKey
 * @param cssClasses
 * @returns {JSX.Element}
 */
export const getWeatherIconByKey = (imgKey, cssClasses = '') => {
    let src = '/img/weathericon/svg/' + imgKey + '.svg';
    return <img className='icon' src={src}/>;
};

/**
 *
 * @param hour
 * @returns {boolean}
 */
export function isDaylight(hour) {
    const sunup = '09';
    const sundown = '15';
    if(sunup <= hour && hour <= sundown){
        return true;
    }
    return false;
}

/**
 * Get spot data
 * The data is fetched from yr.no by axios
 * The data is cached in the local storage
 *
 * @param spotId
 * @returns {null|any|Promise<AxiosResponse<any>>}
 */
export const getWindData = (spotId = null) => {
    //localStorage.clear();
    const key = 'spotId' + spotId;
    if(spotId === null) {
        console.log('Error: no spotId');
        return null;
    }
    const currentSpot = spots.find(x => x.id === spotId);
    if( currentSpot === undefined) {
        console.log('Error: no spot with id ' + spotId);
        return null;
    }

    currentSpot.hourly = null;
    let url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=' + currentSpot.lat + '&lon=' + currentSpot.lon;
    let hourly = JSON.parse(localStorage.getItem(key));
    if ( hourly ) {
        return hourly;
    } else  {
        const spotData = axios.get(url)
            .then(res => {
                localStorage.setItem(key + '-RAW', JSON.stringify(res));
                const timeseries = res.data.properties.timeseries;
                //console.log(res.data);
                const hourly = timeseries.map((arr) => {
                    let windObj = {
                        time: arr.time,
                        temp: arr.data.instant.details.air_temperature.toFixed(0),
                        dir: arr.data.instant.details.wind_from_direction,
                        hour: getDate(arr.time, 'hour'),
                        key: getDate(arr.time, 'key'),
                        isDaylight: isDaylight(getDate(arr.time, 'hour')),
                    };
                    if('wind_speed_of_gust' in arr.data.instant.details) {
                        windObj.wind = arr.data.instant.details.wind_speed;
                        windObj.gust = parseInt(arr.data.instant.details.wind_speed_of_gust.toFixed(0));
                    } else {
                        windObj.wind = parseInt(arr.data.instant.details.wind_speed.toFixed(0));
                        windObj.gust = 0;
                    }
                    if ('next_1_hours' in arr.data) {
                        windObj.icon = arr.data.next_1_hours.summary.symbol_code;
                    } else if ('next_6_hours' in arr.data) {
                        windObj.icon = arr.data.next_6_hours.summary.symbol_code;
                    } else {
                        windObj.icon = null;
                    }
                    return windObj;
                });
                //console.log('Store new wind data');
                currentSpot.hourly = hourly;
                localStorage.setItem(key, JSON.stringify(currentSpot));
                return currentSpot;
            });
        return spotData;
    }
};

/**
 * return the spotId for url search params
 * if no param return the default spotId 1
 * @returns {number}
 */
export const getSpotIdFromUrl = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    let spotId = searchParams.get('spotid');
    if(spotId === undefined) {
        spotId = 1;
    }
    return parseInt(spotId);
}