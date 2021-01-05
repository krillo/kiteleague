import React from 'react';
import { roundWind } from './../../utils/utils.js';
import {ReactComponent as DirectionSVG} from './direction.svg';
import {ReactComponent as DirectionEmptySVG} from './direction-empty.svg';
import './Direction.scss';

class Direction extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * check if wind direction is in kitable range
     */
    getGoodDirection = () => {
        let goodDirection = false, dir = this.props.dir, min = this.props.dirMin, max = this.props.dirMax;
        if(min > max) {  //special case when ok wind dir passes 360/0 degres
            if (dir <= max || dir >= min) {
                goodDirection = true;
            }
        } else { //normal case
            if (dir >= min && dir <= max) {
                goodDirection = true;
            }
        }
        return goodDirection;
    }



    render() {
        let styles = {
            transform: 'rotate('+this.props.dir+'deg)',
        };
        const goodDirection = this.getGoodDirection();
        return (
            <div className={`direction dir${ this.props.dir} min${ this.props.dirMin} max${ this.props.dirMax} w${ roundWind(this.props.wind) } g${ this.props.gust }`} style={styles} >
                {goodDirection ? (
                    <DirectionSVG />
                ) : (
                    <DirectionEmptySVG />
                )}
            </div>
        );
    }
}
export default Direction;
