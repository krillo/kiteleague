import {getPath, settingsFile} from "../settingsFile";

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
 * @returns {string|boolean}
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
    let hour = pad(date.getUTCHours());
    let minutes = pad(date.getUTCMinutes());
    let time = hour + ':' + minutes;
    let key = jsondate.substring(5, 10) + '-' + hour;
    let isoJustDate = jsondate.substring(0, 10);
    let weekday = weekdays[date.getDay()];
    let weekdayShort = weekdaysShort[date.getDay()];
    let isToday = false;
    if(date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()) {
        isToday = true;
    }
    let isoDateHour = jsondate.substring(0, 10) + '-' + hour;
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
        case 'iso-date-hour':
            return isoDateHour;
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
 * reset setting by emptying the localStorage
 * and then
 * @returns {boolean}
 */
export const resetSettings = () => {
    localStorage.clear();
}

/**
 * returns current timestamp with minutes and seconds truncated
 * output format: "2021-01-02T15:00:00Z"
 * see also toISOString()
 * @returns {string}
 */
export const getCurrentTimestamp = () => {
    let t = new Date();
    let timestamp = JSON.stringify(t);
    timestamp = timestamp.substring(1, 14) + ':00:00Z';
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
    const pathArray = window.location.pathname.split('/');
    let id;
    if (pathArray[2] === 'detail') {
        id = pathArray[3];
        let idInt = parseInt(id);
        return idInt;
    }
    return NaN;
}

/**
 * Prime all setting to localStorage.
 * If they already exist then leave them else add them
 * @returns {array}
 */
export function primeSettings() {
    let key = '';
    let settings = settingsFile;
    settings.map(setting => {
        key = setting.id;
        const fromStorage = getSetting(key);
        if (!fromStorage) {
            setSetting(key, setting);
        }
    })
}

/**
 * get setting from localStorage
 * return the whole obj if not 'getOnlyValue' is set to true
 * the actual setting is always stored as the .value attribute
 * @param key
 * @param getOnlyValue
 * @returns {boolean|any}
 */
export function getSetting(key, getOnlyValue = false) {
    try {
        const setting = JSON.parse(localStorage.getItem(key));
        if(getOnlyValue) {
            return setting.value;
        }
        return setting;
    } catch(e) {
        console.log('Error getting value from localStorage, key: ' + key);
        return false;
    }
}

/**
 * set a setting in localStorage
 * the setting should be an object with this format {id:'xxx', value:true}
 * @param key
 * @param obj
 * @returns {boolean}
 */
export function setSetting(key, obj) {
    try {
        localStorage.setItem(key, JSON.stringify(obj));
        return true;
    } catch(e) {
        console.log('Error setting value in localStorage, key: ' + key + ' value: ' + obj);
        return false;
    }
}
