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
 * @returns {JSX.Element}
 */
export const getWeatherIconByKey = (imgKey, cssClass = '') => {
    let src = '/img/weathericon/svg/' + imgKey + '.svg';
    return <img className='icon' src={src}/>;
};