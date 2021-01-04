import React, {Component} from 'react';
import './Settings.scss';
import IOSSwitch from '../IOSSwitch/IOSSwitch';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state =  {
        }
    }


    render() {
        return (
            <div className="settings">
                <h1>Settings</h1>
                <ul>
                    <li className={'setting'}>
                        <div><IOSSwitch text={'Show only daylight hours'}/></div>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Settings;
