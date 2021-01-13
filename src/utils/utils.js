import { getPath } from "../settingsFile";

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
 * key - '12-16-08'
 * weekday - 'Wednesday'
 * weekday-short - 'Wed'
 * is-today - boolean
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
    const today = new Date();
    let monthName = months[date.getMonth()];
    let day = date.getDate();
    let niceDate = day + ' ' + monthName;
    let hour = pad(date.getHours());
    let minutes = pad(date.getMinutes());
    let time = hour + ':' + minutes;
    let key = jsondate.substring(5, 10)  +  '-' + hour;
    let isoJustDate = jsondate.substring(0, 10);
    let weekday = weekdays[date.getDay()];
    let weekdayShort = weekdaysShort[date.getDay()];
    let isToday = false;
    if(date.getDate() == today.getDate() &&
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear()) {
        isToday = true;
    }
    switch (type) {
        case 'date':
            return niceDate;
        case 'time':
            return time;
        case 'hour':
            return hour;
        case 'key':
            return key;
        case 'weekday':
            return weekday;
        case 'weekday-short':
            return weekdayShort;
        case 'iso-just-date':
            return isoJustDate;
        case 'is-today':
            return isToday;
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
 * returns current truncated timestamp i this format:
 * "2021-01-02T15:00:00Z"
 * see also toISOString()
 * @returns {string}
 */
export const getCurrentTimestamp = () => {
    let t = new Date();
    let timestamp = JSON.stringify(t);
    timestamp = timestamp.substring(1, 14) + ':00:00Z';
    //console.log(timestamp);
    return timestamp;
}



/**
 * return img tag for weather icon key
 * @param imgKey
 * @param cssClasses
 * @returns {JSX.Element}
 */
export const getWeatherIconByKey = (imgKey, cssClasses = '') => {
    const src = getPath.weatherIcon + imgKey + '.svg';
    return <img className='icon' src={src}/>;
};


export const getIcon = (imgKey, type = 'svg', cssClasses = '') => {
    const src = getPath.img + imgKey + '.' + type;
    return <img className={`icon ${cssClasses}`} src={src}/>;
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