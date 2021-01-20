import React, {Component} from 'react';
import './Settings.scss';
import IOSSwitch from '../IOSSwitch/IOSSwitch';
import { settingsFile } from './../../settingsFile';
import { clearSpotCache, clearNCacheAllSpots} from "../../utils/weatherData";
import {getSetting, setSetting, resetSettings, primeSettings} from "../../utils/utils";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            showKitesurf: getSetting('showKitesurf', true),
            showSnowkite: getSetting('showSnowkite', true),
            showSpecial: getSetting('showSpecial', true),
            showOnlyDaylight: getSetting('showOnlyDaylight', true),
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    });
        if(['showSpecial', 'showKitesurf',  'showSnowkite', 'showSpecial', 'showOnlyDaylight'].includes(name)) {
            let setting = getSetting(name);
            setting.value = value;
            setSetting(name, setting);
        }
    }

    clearAndPrimeCaches = () => {
        clearSpotCache();
        clearNCacheAllSpots();
    }

    resetSettings = () => {
        resetSettings();
        primeSettings();
        this.setState({ showKitesurf: getSetting('showKitesurf', true) })
        this.setState({ showSnowkite: getSetting('showSnowkite', true) })
        this.setState({ showSpecial: getSetting('showSpecial', true) })
        this.setState({ showOnlyDaylight: getSetting('showOnlyDaylight', true) })
    }

    render() {
        return (
            <div className="settings">
                <h1>Settings</h1>
                <IOSSwitch labelText={'Show only daylight:'} name={"showOnlyDaylight"} checked={this.state.showOnlyDaylight} onChange={this.handleInputChange} />
                <IOSSwitch labelText={'Show kite surfing spots:'} name={"showKitesurf"} checked={this.state.showKitesurf} onChange={this.handleInputChange} />
                <IOSSwitch labelText={'Show snow-kite spots:'} name={"showSnowkite"} checked={this.state.showSnowkite} onChange={this.handleInputChange} />
                <IOSSwitch labelText={'Show special spots:'} name={"showSpecial"} checked={this.state.showSpecial} onChange={this.handleInputChange} />
                <button className={'clear-cache'} onClick={() => this.clearAndPrimeCaches()}>Clear cache</button>
                <button className={'reset-settings'} onClick={() => this.resetSettings()}>Reset settings</button>
            </div>
        )
    }
}

export default Settings;
