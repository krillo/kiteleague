import React, {Component} from 'react';
import './Settings.scss';
import IOSSwitch from '../IOSSwitch/IOSSwitch';
import { settingsFile } from './../../settingsFile';
import { clearSessionStorage, cacheAllSpots} from "../../utils/weatherData";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state =  {};
        settingsFile.map( (setting) => {
            console.log(setting.id , setting.value);
            //this.state = {setting.id : setting.value};
            // switch (setting.type) {
            //     case "button":
            //         this.state = {setting.id : setting.value};
            //         break;
            //     case "checkbox":
            //         this.state[setting.id] = setting.value;
            //         break;
            //     default:
            // }
        })
        //this.setSettingsState();
        let i = 0;
    }


     handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
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
        clearSessionStorage();
        cacheAllSpots();
    }

    render() {
        return (
            <div className="settings">
                <h1>Settings</h1>
                <ul>
                    <li className={'setting'}>
                        { this.getSettings() }
                    </li>
                </ul>
                {/*<button className={'clear-cache'} onClick={() => clearSessionStorage()}>Clear cache</button>*/}
                <button className={'clear-cache'} onClick={() => this.clearAndPrimeCaches()}>Clear cache</button>
                {/*<button className={'clear-cache'} onClick={() => this.apa()}>Clear cache</button>*/}
            </div>
        )
    }
}

export default Settings;
