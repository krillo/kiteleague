import axios from 'axios';
import spotsFile from '../spotsFile';
import { getDate, getSetting, setSetting, isDaylight, getCurrentTimestamp } from './utils';
import React from "react";


/**
 * Get spot data
 * The data is fetched from yr.no by axios
 * The data is cached in the sessionStorage
 *
 * @param spotId int
 * @returns {Promise<void>}
 */
export const getWindData = async (spotId = null) => {
    let currentSpot = getSpotBaseData(spotId);
    let hourly = getSpotDataFromSessionStorage(currentSpot);
    if( hourly ) {
        return hourly;
    }
    return getSpotDataFromAPI (currentSpot);
};

export const getCachedWindData = (spotId = null) => {
    if(spotId !== null) {
        let currentSpot = getSpotBaseData(spotId);
        let hourly = getSpotDataFromSessionStorage(currentSpot);
        if( hourly ) {
            return hourly;
        }
    }
    return null;
};

function getSpotDataFromSessionStorage (currentSpot) {
    const key = getSpotKey(currentSpot);
    let hourly = JSON.parse(sessionStorage.getItem(key));
    if ( !hourly ) {
        return null;
    }
    return hourly;
}

/**
 * https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=56.0&lon=12.72
 *
 * @param currentSpot
 * @returns {Promise<unknown>}
 */
const getSpotDataFromAPI = async (currentSpot) => {
    const key = getSpotKey(currentSpot);
    let url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=' + currentSpot.lat + '&lon=' + currentSpot.lon;
    let res;
    const refined = await axios.get(url)
        .then(response => {
            sessionStorage.setItem( getSpotKey(currentSpot) + '-RAW', JSON.stringify(response));
            const refined = refineWindData(currentSpot, response);
            setCurrentTimestamp(response);
            return refined;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
    return refined;
}

function setCurrentTimestamp(response) {
    const timestamp = response.data.properties.timeseries[0].time;
    localStorage.setItem( 'currentTimestamp', JSON.stringify(timestamp));
    console.log('timestamp from API, hour', timestamp, getDate(timestamp,'hour'));
    console.log('currnet timestamp, hour ', getCurrentTimestamp(), getDate(getCurrentTimestamp(), 'hour'));
}


/**
 * refines the wind data and stores it to sessionStorage
 * @param currentSpot
 * @param res
 * @returns {*}
 */
function refineWindData(currentSpot, res) {
    const key = getSpotKey(currentSpot);
    const timeseries = res.data.properties.timeseries;
    let hourly = {};
    timeseries.forEach((arr) => {
        let windObj = {
            timestamp: arr.time,
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
        let timestamp = arr.time;
        hourly[timestamp] = windObj;
    });
    currentSpot.hourly = hourly;
    sessionStorage.setItem( getSpotKey(currentSpot), JSON.stringify(currentSpot));
    return currentSpot;
}




/**
 * return spot key
 * @param currentSpot
 * @returns {string}
 */
function getSpotKey(currentSpot) {
    return 'spot-' + currentSpot.id;
}

/**
 * clears a local storage item or all if no key is submitted
 * @param key
 * @returns {boolean}
 */
export const clearSessionStorage = (key = null) => {
    if (key) {
        sessionStorage.removeItem(key)
    } else {
        sessionStorage.clear();
    }
    return true;
}

/**
 * caches all spots
 * if clearCache is true then removes all old cached data and gets new
 * returns an array of all ids that's cached
 *
 * @param clearCache
 * @returns {[]}
 */
export const cacheAllSpots = (clearCache = false) => {
    if(clearCache) {
        clearSessionStorage();
    }
    let allSpotIds = [];
    spotsFile.forEach(spot => {
            allSpotIds.push(spot.id);
            getWindData(spot.id);
        }
    );
    return allSpotIds;
}



export const primeWeatherData = () => {
    const currentTimestamp = getSetting('currentTimestamp')

}



// export const cacheAllSpots = () => {
//     const spotsSummary = spots.map((spot) => {
//
//         const windDataPromise = getWindData(this.state.spotId);
//         windDataPromise.then(windData => this.setState({ current: windData }));
//
//         getWindData()
//         return <div>{spot.id} {spot.name}</div>
//     })
//     return spotsSummary;
// }


/**
 * return spot base data
 * @param spotId
 * @returns {{dirMin: number, dirMax: number, name: string, lon: number, id: number, lat: number}|{dirMin: number, dirMax: number, name: string, lon: number, id: number, lat: number}|{dirMin: number, dirMax: number, name: string, lon: number, id: number, lat: number}|{dirMin: number, dirMax: number, name: string, lon: number, id: number, lat: number}|{dirMin: number, dirMax: number, name: string, lon: number, id: number, lat: number}|null}
 */
function getSpotBaseData(spotId = null) {
    if(spotId === null) {
        console.log('Error: no spotId');
        return null;
    }
    spotId = parseInt(spotId);
    const currentSpot = spotsFile.find(spot => spot.id === spotId);
    if( currentSpot === undefined) {
        console.log('Error: no spot with id ' + spotId);
        return null;
    }
    if ('id' in currentSpot && 'name' in currentSpot ) {
        return currentSpot
    } else {
        console.log('Error: Base data missing for spot with id ' + spotId);
        return null;
    }

}