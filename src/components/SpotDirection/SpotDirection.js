import React from 'react';
import { getWindColor } from './../../utils/weatherData';
import './SpotDirection.scss';

class SpotDirection extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * return percentage based on 360 degrees as 100%
     * @param min
     * @param max
     * @returns {number}
     */
    getPercent = (min, max) => {
        const minn = parseInt(min);
        const maxx = parseInt(max);
        return parseInt(((((maxx - minn) / 360) * 100).toFixed(0)));
    }

    /**
     * Returns the css variable to "background: conic-gradient()"
     * I.e. dirMin: 180 and  dirMax: 290 gives:
     * conic-gradient(#f9f9f9 0 0%, #4F9E4F 0 31%, #f9f9f9 0 100%)
     * @returns {string}
     */
    getConicGradientParams = () => {
        const min = this.props.dirMin, max = this.props.dirMax;
        //const goodColor = getWindColor(this.props.wind);
        const goodColor = '#4f9e4f';
        //let badColor = this.props.badColor ? this.props.badColor:'#f9f9f9';
        //let badColor = this.props.badColor ? this.props.badColor:'#e5e5e5';
        let badColor = '#fff';
        if(this.props.mode === 'dark') {
            badColor = '#e5e5e5';
        }
        const dark = '';
        let goodPercent, bad1, good1, conicGradient;

        if(min > max) {
            goodPercent = this.getPercent(min, 360) + this.getPercent(0, max);
            if(min >= 180 && max <= 180) {
                console.log('*** 1 min:', min, ', max: ', max);
                bad1 = this.getPercent(180, min);
                good1 = bad1 + goodPercent;
                conicGradient =
                    `conic-gradient(${badColor} 0 ${bad1}%, ${goodColor} 0 ${good1}%, ${badColor} 0 100%)`;
            } else if(max >= 180) {
                console.log('*** 2 min:',min, ', max: ', max );
                good1 = this.getPercent(180, max);
                bad1 = good1 - this.getPercent(min, max);
                conicGradient =
                    `conic-gradient(${goodColor} 0 ${good1}%, ${badColor} 0 ${bad1}%, ${goodColor} 0 100%)`;
            } else {
                console.log('*** 3 min:',min, ', max: ', max );
                good1 = 50 + this.getPercent(0, max);
                bad1 = good1 + 100 - goodPercent;
                conicGradient =
                    `conic-gradient(${goodColor} 0 ${good1}%, ${badColor} 0 ${bad1}%, ${goodColor} 0 100%)`;
            }
        } else {
            goodPercent = this.getPercent(min, max);
            if(min >= 180) {
                console.log('*** 4 min:',min, ', max: ', max );
                bad1 = 0 + this.getPercent(180, min);
                good1 = bad1 + goodPercent;
                conicGradient =
                    `conic-gradient(${badColor} 0 ${bad1}%, ${goodColor} 0 ${good1}%, ${badColor} 0 100%)`;
            } else if(min >= 0 && max <= 180) {
                console.log('*** 5 min:',min, ', max: ', max );
                bad1 = 50 + this.getPercent(0, min);
                good1 = bad1 + goodPercent;
                conicGradient =
                    `conic-gradient(${badColor} 0 ${bad1}%, ${goodColor} 0 ${good1}%, ${badColor} 0 100%)`;
            } else if(min >= 0 && max >= 180) {
                console.log('*** 6 min:',min, ', max: ', max );
                good1 = this.getPercent(180, max);
                bad1 = 100 - goodPercent + good1;
                conicGradient =
                    `conic-gradient(${goodColor} 0 ${good1}%, ${badColor} 0 ${bad1}%, ${goodColor} 0 100%)`;
            }
        }
        console.log(conicGradient);
        return conicGradient;
    }

    render() {
        const conicGradient = this.getConicGradientParams();
        let styles = {
            background: conicGradient,
        };
        return (
            <div className={'spot-direction'}>
                <div className="conic" style={styles} ></div>
                <div className="n">N</div>
                <div className="s">S</div>
                <div className="e">E</div>
                <div className="w">W</div>
                <div className={'spot-direction-text'}>dirMin:{this.props.dirMin} dirMax:{this.props.dirMax}</div>
            </div>
        );
    }
}
export default SpotDirection;
