import axios from 'axios';
import spotsFile from '../spotsFile';
import { getDate, getSetting, setSetting, isDaylight, getCurrentTimestamp } from './utils';
import React from "react";

/**
 * Makes sure that latest weather data in the cache.
 * if weather data already exists in cache then it checks if its old,
 * in that case gets new
 */
export const primeWeatherData = async () => {
    console.log('primeWeatherData -- 1');
    if(dataNeedsUpdate()) {
        console.log('primeWeatherData -- Needs cache update');
        clearSpotCache();
        for (const spot of spotsFile) {
            const spotData = await getSpotDataFromAPI(spot);
            console.log(spotData);
        }
        return true;
    } else {
        console.log('primeWeatherData -- cache is up to date');
        return true;
    }
}






/**
 * clears cache and caches new data for all spots
 * returns an array of all ids that's cached
 *
 * @returns {[]}
 */
export const clearNCacheAllSpots = () => {
    clearSpotCache();
    let allSpotIds = [];
    spotsFile.forEach(spot => {
            allSpotIds.push(spot.id);
            getWindDataForSpot(spot.id);
        }
    );
    return allSpotIds;
}

/**
 * Get spot data
 * @param spotId int
 * @returns {Promise<[]>}
 */
export const getWindDataForAllSpots = async () => {
    let spotData = [];
    spotsFile.forEach(spot => {
            getWindDataForSpot(spot.id).then(spotData.push(spot))
    });
    return spotData;
}

/**
 * Get spot data
 * @param spotId int
 * @returns {Promise<void>}
 */
export const getWindDataForSpot = async (spotId = null) => {
    let currentSpot;
    if(spotId !== null) {
        currentSpot = getSpotBaseData(spotId);
        let hourly = getSpotDataFromSessionStorage(currentSpot);
        if( hourly ) {
            return hourly;
        }
    }
    return getSpotDataFromAPI (currentSpot);
};


export function getSpotDataFromSessionStorage (currentSpot) {
    const key = getSpotKey(currentSpot);
    let hourly = JSON.parse(sessionStorage.getItem(key));
    if ( !hourly ) {
        return null;
    }
    return hourly;
}



/**
 * The data is fetched from yr.no by axios
 * The data is cached in the sessionStorage
 * https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=56.0&lon=12.72
 *
 * @param currentSpot
 * @returns {Promise<unknown>}
 */
const getSpotDataFromAPI = async (currentSpot) => {
    let url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=' + currentSpot.lat + '&lon=' + currentSpot.lon;
    const refined = await axios.get(url)
        .then(response => {
            sessionStorage.setItem( getSpotKey(currentSpot) + '-RAW', JSON.stringify(response));
            const refined = refineWindData(currentSpot, response);
            setLatestDataTimestamp(response);
            return refined;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
    return refined;
}

/**
 * set the latest data timestamp, gathered from the ajax response
 * @param response
 */
function setLatestDataTimestamp(response) {
    let latestDataTimestamp = response.data.properties.timeseries[0].time;
    sessionStorage.setItem( 'latestDataTimestamp', JSON.stringify(latestDataTimestamp));
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
 * return true if wind data needs to be updated
 * @returns {boolean}
 */
export const dataNeedsUpdate = () => {
    const latestDataTimestamp = JSON.parse(sessionStorage.getItem( 'latestDataTimestamp'));
    if(latestDataTimestamp === null) return true;
    const currentTimestamp = getCurrentTimestamp();
    return (currentTimestamp > latestDataTimestamp);
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
 * latestDataTimestamp is also stored there and also removed
 * @returns {boolean}
 */
export const clearSpotCache = () => {
    sessionStorage.clear();
}

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

export const getSpotIds = () => {
    const ids = spotsFile.map(spot => spot.id)
    return ids;
}

/**
 * returns the hex color code for the wind
 * NOTICE variables also defined in the "_scss-variables.scss" file
 * @param wind
 * @returns {string}
 */
export const getWindColor = (wind) => {
    wind = parseInt(wind);
    switch (wind) {
        case -1:
            return '#444';
        case 0:
            return '#203763';
        case 1:
            return '#203763';
        case 3:
            return '#203763';
        case 4:
            return '#1a6cb2';
        case 5:
            return '#1a6cb2';
        case 6:
            return '#1a6cb2';
        case 7:
            return '#4f9e4f';
        case 8:
            return '#4f9e4f';
        case 9:
            return '#4f9e4f';
        case 10:
            return '#f09100';
        case 11:
            return '#f09100';
        case 12:
            return '#f09100';
        case 13:
            return '#f84400';
        case 14:
            return '#f84400';
        case 15:
            return '#f84400';
        case 16:
            return '#9d013d';
        case 17:
            return '#9d013d';
        case 18:
            return '#9d013d';
        case 19:
            return '#752222';
        case 20:
            return '#752222';
        case 21:
            return '#752222';
        case 22:
            return '#752222';
        default:
            return '#444';
    }
}