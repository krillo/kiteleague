import React from 'react';
import { roundW } from './../../utils/utils.js';
import {ReactComponent as DirectionSVG} from './direction.svg';
import './Direction.scss';

class Direction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styles = {
            transform: 'rotate('+this.props.dir+'deg)',
        };
        return (
            <div className={`direction r${ this.props.dir} w${ roundW(this.props.wind) } g${ this.props.gust }`} style={styles} >
                <DirectionSVG />
            </div>
        );
    }
}
export default Direction;
