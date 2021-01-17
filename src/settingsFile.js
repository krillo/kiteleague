import {Link} from "react-router-dom";
import {ReactComponent as PinSVG} from "./design-tokens/icons/pin.svg";
import React from "react";

export const settingsFile = [
    {id: 'showOnlyDaylight', text: 'Show only daylight hours', type: 'checkbox',  value: true},
    {id: 'showKitesurf', text: 'Show kite or SUP data', type: 'checkbox',  value: true},
    {id: 'clearCache', text: 'Clear cache', type: 'button', value:'not cleared'},
];

export const getPath = {
    'home': '/',
    'summary': '/summary',
    'settings': '/settings',
    'detail': '/detail',
    'img': '/kiteleague/img/icon/',
    'weatherIcon': '/kiteleague/img/weathericon/svg/',
};
// export const getPath = {
//     'home': '/kiteleague',
//     'summary': '/kiteleague/summary',
//     'settings': '/kiteleague/settings',
//     'detail': '/kiteleague/detail',
//     'img': '/kiteleague/img/icon/',
//     'weatherIcon': '/kiteleague/img/weathericon/svg/',
// };