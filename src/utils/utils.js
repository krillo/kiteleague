import axios from 'axios';

/**
 * Round wind to to 0 decimals
 * @param wind
 * @returns {string}
 */
export const roundWind = (wind) => {
    return wind.toFixed(0);
};

export const getDate = (jsondate, type) => {
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
};

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


// let spots = [
//     {id: "1", name: 'Råå', wind: 6, gust: 8, dir: 90, temp: 14, icon: 'partlycloudy_night', time:'2020-12-16T21:00:00Z'},
//     {id: "2", name: 'Fortuna', wind: 7.9, gust: 9, dir: 180, temp: 13, icon: 'cloudy', time:'2020-12-16T21:00:00Z'},
//     {id: "3", name: 'LA', wind: 19, gust: 10, dir: 270, temp: 12, icon: 'fair_day', time:'2020-12-16T21:00:00Z'},
//     {id: "4", name: 'JP', wind: 11, gust: 12, dir: 90, temp: 12, icon: 'clearsky_day', time:'2020-12-16T21:00:00Z'},
//     {id: "5", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//     {id: "6", name: 'Habo', wind: 8, gust: 15, dir: 180, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//     {id: "7", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//     {id: "8", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//     {id: "9", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
//     {id: "10", name: 'BBC', wind: 11, gust: 11, dir: 0, temp: 13, icon: 'lightrain', time:'2020-12-16T21:00:00Z'},
// ];



export const spots = [
    {id: 1, name: 'Råå', lat: 56.0, lon: 12.72, dirMin: 45, dirMax: 120},
    {id: 2, name: 'Fortuna', lat: 55.95, lon: 12.75, dirMin: 45, dirMax: 120},
    {id: 3, name: 'LA', lat: 55.85, lon: 12.86, dirMin: 45, dirMax: 120},
    {id: 4, name: 'JP', lat: 55.81, lon: 12.91, dirMin: 45, dirMax: 120},
    {id: 5, name: 'BBC', lat: 55.77, lon: 12.92, dirMin: 45, dirMax: 120},
    {id: 6, name: 'Habo', lat: 55.69, lon: 13.04, dirMin: 45, dirMax: 120},
    {id: 7, name: 'Sibirien', lat: 56.23, lon: 12.81, dirMin: 45, dirMax: 120},
    {id: 8, name: 'Laga Oset', lat: 56.54, lon: 12.94, dirMin: 45, dirMax: 120},
    {id: 9, name: 'Parkvägen', lat: 55.38, lon: 12.93, dirMin: 45, dirMax: 120},
    {id: 10, name: 'Falsterbo', lat: 55.39, lon: 12.85, dirMin: 45, dirMax: 120},
];



//getSurfDataBySpot
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
    let url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=' + currentSpot.lat + '&lon=' + currentSpot.lon;
    console.log(url);
    currentSpot.hourly = null;
    let hourly = JSON.parse(localStorage.getItem(key));
    if ( !hourly ) {
        currentSpot = axios.get(url)
            .then(res => {
                localStorage.setItem(key+'-RAW', JSON.stringify(res));
                const timeseries = res.data.properties.timeseries;
                //console.log(res.data);
                const hourly = timeseries.map((arr) => {
                    let windObj = {
                        time: arr.time,
                        wind: arr.data.instant.details.wind_speed,
                        gust: arr.data.instant.details.wind_speed_of_gust,
                        temp: arr.data.instant.details.air_temperature,
                        dir: arr.data.instant.details.wind_from_direction,
                    };
                    if('next_1_hours' in arr.data) {
                        windObj.icon = arr.data.next_1_hours.summary.symbol_code;
                    } else {
                        windObj.icon = null;
                    }
                    return windObj;
                });
                localStorage.setItem(key, JSON.stringify(hourly));
                //console.log('Store new wind data');
                currentSpot.hourly = hourly;
                return currentSpot;
            });
        return currentSpot;
    } else {
        hourly = JSON.parse(localStorage.getItem(key));
        currentSpot.hourly = hourly;
        console.log("REturning currentSpot data");
        console.log(currentSpot);
        return currentSpot
    }
};

/**
 * return the spotId for url search params
 * if no param return the default spotId 1
 * @returns {number}
 */
export const getSpotIdFromUrl = () => {
    let paramsString = window.location.search;
    let searchParams = new URLSearchParams(paramsString);
    let spotId = searchParams.get('spotid');
    if(spotId === undefined) {
        spotId = 1;
    }
    return parseInt(spotId);
}