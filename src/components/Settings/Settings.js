import React, {Component} from 'react';
import './Settings.scss';
import IOSSwitch from '../IOSSwitch/IOSSwitch';
import { settingsFile } from './../../settingsFile';
import { clearSpotCache, clearNCacheAllSpots} from "../../utils/weatherData";
import {getSetting, setSetting} from "../../utils/utils";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            showSpecialSpots: getSetting('showSpecialSpots', true),
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    });
        if(name === 'showSpecialSpots') {
            let showSpecialSpots = getSetting('showSpecialSpots');
            showSpecialSpots.value = value;
            setSetting('showSpecialSpots', showSpecialSpots);
        }
    }


    getSettings = () => {
        let key = '';
        let settingHtml = settingsFile.map( setting => {
            console.log(setting.type);
            key = "setting-" + setting.id;
            switch (setting.type) {
                case "button":
                    return <div key={setting.id} className={setting.id}></div>
                    //return <div key={setting.id} className={setting.id}><button >{setting.text}</button></div>
                case "checkbox":
                    return(
                    <div key={setting.id} className={setting.id}>
                        <IOSSwitch
                            text={setting.text}
                            checked={this.state[setting.id]}
                            name={setting.id}
                            onChange={this.handleInputChange} />
                    </div>)
                default:
                    return <div>Error</div>
            }
        })
        return settingHtml;
    }


    apa = () => {
        alert('button click');
    }

    clearAndPrimeCaches = () => {
        clearSpotCache();
        clearNCacheAllSpots();
    }

    render() {
        return (
            <div className="settings">
                <h1>Settings</h1>
                {/*<ul>*/}
                {/*    <li className={'setting'}>*/}
                {/*        { this.getSettings() }*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <IOSSwitch labelText={'Show special spots:'} name={"showSpecialSpots"} checked={this.state.showSpecialSpots} onChange={this.handleInputChange} />
                <button className={'clear-cache'} onClick={() => this.clearAndPrimeCaches()}>Clear cache</button>
            </div>
        )
    }
}

export default Settings;
