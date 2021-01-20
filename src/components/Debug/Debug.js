import React, {Component} from 'react';
import './Debug.scss';
import Spinner from '../Spinner/Spinner';
import SpotDirection from "../SpotDirection/SpotDirection";
import {Route} from "react-router-dom";

class Debug extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        }
    }

    render() {
        return (
            <div>
                <Spinner />
                <div className={'debug-spot-direction'}>
                    <SpotDirection dirMin={270} dirMax={20} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={90} dirMax={45} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={200} dirMax={300} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={0} dirMax={90} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={90} dirMax={270} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={90} dirMax={300} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={0} dirMax={360} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={0} dirMax={0} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={300} dirMax={360} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={10} dirMax={45} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={300} dirMax={200} wind={10}  badColor={'#e5e5e5'}/>
                    <SpotDirection dirMin={180} dirMax={290} wind={10}  badColor={'#e5e5e5'}/>
                </div>
            </div>
        )
    }
}

export default Debug;
